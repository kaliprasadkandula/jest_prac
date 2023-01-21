const axios=require('axios')
const functions={
    add:(num1,num2) =>num1 + num2,
    sub:(num1,num2) =>num1 - num2,
    createObject:()=>{return {"name":'kali',"age":21}},
    age:()=>21,
    fetchUser:(num)=>
        axios
        .get(`https://jsonplaceholder.typicode.com/users/${num}`)
        .then(response => {return response.data})//returning actual data whoever called
        .catch((err)=>{`error`})
    
}
module.exports={functions}