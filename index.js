

let ahorro = prompt("Ingrese Monto a Ahorrar");
let periodo = prompt("ingrese la cantidad de meses");



if (tipo == "Renta Fija")

let tasa = (0.36/12);
var term4=(1+tasa)
var term3=Math.pow(term4, periodo)
var term2=(term3-1);
var term1=(term2/tasa);
var resultado=(ahorro*term1);

else if(tipo == "Renta Mixto")

let tasa = (0.46/12);
var term4=(1+tasa)
var term3=Math.pow(term4, periodo)
var term2=(term3-1);
var term1=(term2/tasa);
var resultado=(ahorro*term1);

else if(tipo == "Renta variable")

let tasa = (0.56/12);
var term4=(1+tasa)
var term3=Math.pow(term4, periodo)
var term2=(term3-1);
var term1=(term2/tasa);
var resultado=(ahorro*term1);

console.log (resultado)

