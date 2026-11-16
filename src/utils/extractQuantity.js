
const extractQuantity = (conversation) => {
   const priceRegex =
    /₹\s*\d+|rs\.?\s*\d+|\d+\s*rupees|\d+\s*rs\.?/gi;

      const cleanedConversation = conversation.replace(priceRegex, "");

  const quantity = [...cleanedConversation.matchAll(/\d+/g)];  //matchall returns interator 
//   An iterator is an object that lets JavaScript access values one at a time. It isn't a normal array.

// That means you cannot directly use all normal array methods on it, such as .map().
//The spread operator ... expands the values from an iterable into individual elements.

// WHY WE are using [0] because there can be various values in the array
// becuase matchAll() returns match-result arrays. Their index 0 contains the complete matched text
// eg: item[0]="5", item[0]="10";


  if (quantity.length>0) {

 return quantity.map(item=> Number(item[0])) 

  }

  return null;
};

export default extractQuantity;
