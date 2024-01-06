"use strict";
const fcoisa = () => {
    return [10, 20, 30, 37, 90];
};
let [num1, num2, ...num3] = fcoisa();
console.log(num1);
console.log(num2);
console.log(num3);
