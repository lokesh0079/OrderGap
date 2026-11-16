const extractPrice=(conversation)=>{
 const result = [...conversation.matchAll(
    /₹\s*\d+|rs\.?\s*\d+|\d+\s*rupees|\d+\s*rs\.?/gi
  )];

return result.map((price)=> Number(price[0].replace(/[^\d]/g,"")));
}

export default extractPrice;