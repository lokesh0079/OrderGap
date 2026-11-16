import * as chrono from "chrono-node";

const deliveryDate=(conversation)=>{


const result = chrono.parse(conversation);

if(result.length>0){
  return result[0].start.date();
}
return null


}
export default deliveryDate;