function somar(...nums:number[]):number{
    let s:number=0;
    for (const v of nums) {
        s+=v;
    }
    return s;
}
console.log(somar());