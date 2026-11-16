const checkMissingFields=(order)=>{

  const missingFields=[];

  if(!order.customer?.trim()){
    missingFields.push("customer")
  }
  if(!order.customerPhone?.trim()){
    missingFields.push("customerPhone")
  }
  if(order.products.length===0){
    missingFields.push("products")
  }
  if(order.quantities.length===0){
    missingFields.push("quantities")
  }
  if(order.sizes.length===0){
    missingFields.push("sizes")
  }
  if(order.colors.length===0){
    missingFields.push("colors")
  }
  if(!order.deliveryAddress?.trim()){
    missingFields.push("deliveryAddress")
  }
  if(!order.deliveryDate){
    missingFields.push("deliveryDate")
  }

  
  
return missingFields;

}

export default checkMissingFields