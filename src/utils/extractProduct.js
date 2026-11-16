const extractProduct=(conversation)=>{
 
  const clothingProducts=[
    "t-shirt",
    "t-shirts",
    "shirt",
    "shirts",
    "jeans",
    "kurti",
    "kurtis",
    "trouser",
    "trousers",
    "dress",
    "dresses",
    "hoodie",
    "hoodies",
  ]
// conversation.includes(product)  it only use matching all elements
  const result=clothingProducts.filter(product=>
    {
      const regex=new RegExp(`\\b${product}\\b`)
      return regex.test(conversation)
    } )


    return result
  

}

export default extractProduct;