"use strict";
function somar(...nums) {
    let s = 0;
    for (const v of nums) {
        s += v;
    }
    return s;
}
console.log(somar());
