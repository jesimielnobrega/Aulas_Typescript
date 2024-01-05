"use strict";
var cores;
(function (cores) {
    cores[cores["Vermelho"] = 0] = "Vermelho";
    cores[cores["Verde"] = 1] = "Verde";
    cores[cores["Azul"] = 2] = "Azul";
})(cores || (cores = {}));
console.log(cores[0]);
