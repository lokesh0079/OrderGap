const preprocessConversation=(conversation)=>{

  // let conversation="    HI, I NEED 2 BLACK T-SHIRTS   SIZE XL PLEASE.";
const trimmer=conversation.trim();
  const smallerCase=trimmer.toLowerCase();
  
  const replacer=smallerCase.replace(/ {2,}/g, " ")

  return replacer;
console.log(preprocessConversation("    Hi, I need 2 BLACK  T-Shirts of XL SIZE PLEASE"));

}
export default preprocessConversation;