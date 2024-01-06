// const at=["Red","Green","Blue"];
// let [cor1,cor2,cor3]=at;

// let obj={
//     cor1:"Red",
//     cor2:"Green",
//     cor3:"Blue"
// }
// let {cor1,cor2,cor3}=obj;

// console.log(cor1);
// console.log(cor2);
// console.log(cor3);

// let [num1,num2,...num3]=[10,20,50,30,59]
const fcoisa=()=>{
    return [10,20,30,37,90];
} 

let [num1,num2,...num3]=fcoisa();
console.log(num1)
console.log(num2);
console.log(num3);
