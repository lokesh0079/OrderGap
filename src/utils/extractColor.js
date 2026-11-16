const extractColor=(conversation)=>{
const clothingColors = [
  "black",
  "white",
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "brown",
  "grey",
  "gray",
  "orange",
];

const result =clothingColors.filter(size=> {
  const regex=new RegExp(`\\b${size}\\b`);
  return regex.test(conversation)
})

return result
}

export default extractColor;