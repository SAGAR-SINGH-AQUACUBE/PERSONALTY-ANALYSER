const express = require('express')
const app = express()
// function con(){
//   var username=(document.querySelector('input[name="username"]').value);
//   var password=(document.querySelector('input[name="password"]').value);

//   alert(username);
//   alert(password);
// }

let port=3000;
app.listen(port,()=>{
  console.log(`app is listening on port &{port}`);
})
app.use((req,res)=>{
  console.log("hi");

  // if(username=="sagar" && password=="123" ){
  res.send("successfully registred")
  // else{
  //   res.send("unsuccesgul ")
  // }
})