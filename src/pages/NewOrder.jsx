import { useState } from "react";
import preprocessConversation from "../utils/textProcessor"
import extractQuantity from "../utils/extractQuantity";
import sizeExtraction from "../utils/sizeExtraction"
import extractProduct from "../utils/extractProduct";
import extractColor from "../utils/extractColor";
import extractPrice from "../utils/extractPrice";
import deliveryDate from "../utils/extractDeliveryDate";
import DeliveryAddress from "../utils/extractAddress";
import checkMissingFields from "../utils/checkMissingFields";
const NewOrder=()=>{
  const [customer,setCustomer]=useState("");
    const [customerPhone,setCustomerPhone]=useState("");
      const [conversation,setConversation]=useState("");
        const [message,setMessage]=useState("");
        const [missingFieldValues,setMissingFieldValues]=useState([]);

        const onSubmitAnalyze=(event)=>{
          event.preventDefault()

           if (!conversation.trim()) {
      setMessage("Please enter a customer conversation.");
      return
           }
           
    const result=preprocessConversation(conversation)
    console.log(result);

   const quantities = extractQuantity(result);
    console.log("Here is quantities",quantities);

    const products=extractProduct(result)
    console.log("Here is product",products);
    
    const sizes=sizeExtraction(result)
    console.log("Here are sizes",sizes);
    
    const colors=extractColor(result);
    console.log("This is colors",colors);
    const prices=extractPrice(result)
    console.log("This is price",prices);
    
    const dateResult = deliveryDate(result);
    console.log("Delivery Date",dateResult);
    
    const addressResult = DeliveryAddress(result);
console.log("Delivery Address", addressResult);
  
   
const order = {
  customer,
  customerPhone,
  quantities,
  products,
  sizes,
  colors,
  prices,
  deliveryDate: dateResult,
  deliveryAddress: addressResult,
  status: "Draft"
};

console.log("Complete Order:", order);

const missing=checkMissingFields(order);
console.log("Missing Fields",missing);
setMissingFieldValues(missing);

if(missing.length>0){
  setMessage("Some order information is missing")
}
else{
  setMessage("Order information is complete")
}

  }
  const clearMessage=()=>{
    setCustomer("");
    setCustomerPhone("");
    setConversation("")
    setMessage("");
    setMissingFieldValues([]);
  }

 
  


  return(

 <div className="new-order-page">
    <div className="new-order-heading">
<h2>New Order</h2>
      <p>Create a new clothing order.</p>
 </div>
    
            <form onSubmit={onSubmitAnalyze}>
      {/* Customer Information */}
      <section className="order-form-card">
        <div className="form-section-heading">
          <h4>Customer Information</h4>
          <p>Enter the customer's basic details.</p>
        </div>


           <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="customer" className="form-label">
             <h5> Customer Name </h5>
            </label>
            <input
              type="text"
              id="customer"
              className="form-control"
              placeholder="Enter customer name"
              value={customer}
              onChange={(event) => setCustomer(event.target.value)}
            />
          </div>
    
        <div className="col-md-6">
            <label htmlFor="customerPhone" className="form-label">
               <h5>Phone Number</h5>
            </label>
       <input
  type="tel"
  className="form-control"
  id="customerPhone"
  placeholder="Enter phone number"
  value={customerPhone}
  onChange={(event) => setCustomerPhone(event.target.value)}
/>

            </div>
        </div>
      </section>

        {/* Conversation Input */}
           <section className="order-form-card">
        <div className="form-section-heading">
          <h4>Customer Conversation</h4>
          <p>Paste the customer's message to extract order details.</p>
        </div>
       
      <label htmlFor="">Clothings</label>
      <label htmlFor="">Paste Your Conversation   </label>  
          <textarea
          className="form-control conversation-input"
          placeholder={"Example:\nI need 2 black t-shirts in size L.\nPrice is ₹799.\nDeliver tomorrow to 12 MG Road, Shirpur."}
          value={conversation}
          onChange={(event) => setConversation(event.target.value)}
        />

    <div className="conversation-help">
          Supported input: copied customer text
        </div>
         
     <div className="form-actions">
      <button type="submit" className="btn btn-primary">Analyze Conversation</button>
      <button className="btn btn-danger" type="button" onClick={clearMessage}>Clear </button>
          </div>
      </section>
       </form>

   {/* Analysis Result */}

    {message && (
      <section className="analysis-result-card">
        <h4>Analysis Result</h4>
          <p
          className={
            missingFieldValues.length > 0
              ? "analysis-warning"
              : "analysis-success"
          }
        >
          {message}
        </p>

     {/* {message && <p>{message}</p>} */}
     {missingFieldValues.length > 0 && (
          <div className="missing-fields">
            <h5>Information Required</h5>

            {missingFieldValues.map((missingValue, index) => (
              <p key={index}>
                <span>•</span> {missingValue}
              </p>
            ))}
          </div>
        )} 
        </section>
    )}
 </div>

 
    


  )
}

export default NewOrder;