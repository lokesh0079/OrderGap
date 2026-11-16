const DeliveryAddress=(conversation)=>{

  const address=["delivery address","address","deliver to", "ship to", "shipping address"]

 const result = address.find(keyword =>
  conversation.includes(keyword)
);
    console.log("Matched keyword:", result);

if (!result) {
    return null;
  }

  const regex = new RegExp(
    `(?:${result})\\s*:\\s*([^\\n]+)`
  );
  
console.log("Generated regex:", regex);

 const match = conversation.match(regex);

 console.log("Regex match:", match);
   if (match) {
    return match[1].trim();
  }

  return null;

};


export default DeliveryAddress