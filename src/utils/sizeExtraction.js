const sizeExtraction=(conversation)=>{
const clothingSizes = [
  "xxxl",
  "xxl",
  "xl",
  "xs",
  "s",
  "m",
  "l",
];

const result =clothingSizes.filter(size=> {
  const regex=new RegExp(`\\b${size}\\b`);
  return regex.test(conversation)
})

return result
}

export default sizeExtraction