var menu=prompt("Ingresa una de las siguientes opciones (con numero): 1. Cuadrado, 2. Triangulo, 3. Rectangulo, 4. Circulo");
console.log(menu);

switch(menu){
    case "1":
        let ladoC=parseInt(prompt("¿Cuanto mide el lado del cuadrado (cm)?"));
        let areaC=ladoC*ladoC;
        let perC=ladoC**2;
        console.log("El area del cuadrado es:",areaC,"cm");
        console.log("El perimetro del cuadrado es:",perC,"cm");
        break;
    case "2":
        let baseT=parseInt(prompt("¿Cuanto mide la base del triangulo (cm)?"));
        let altT=parseInt(prompt("¿Cuanto mide la altura del triangulo?(cm)"));
        let areaT=(baseT*altT)/2;
        console.log("El area del cuadrado es:",areaT,"cm");
        break;
    case "3":
        let baseR=parseInt(prompt("¿Cuanto mide la base del rectangulo(cm)?"));
        let alturaR=parseInt(prompt("¿Cuanto mide la altura del rectangulo?(cm)"));
        let areaR=baseR*alturaR;
        let perR=(baseR*2)+(alturaR*2);
        console.log("El area del rectangulo es:",areaR,"cm");
        console.log("El perimetro del rectangulo es:",perR,"cm");
        break; 
    case "4":
        let RadioCi=parseInt(prompt("¿CuaL es el radio del circulo (cm)?"));
        let areaCi=Math.PI*RadioCi**2;
        let perCi=2*Math.PI*RadioCi;
        console.log("El area del circulo es:",areaCi.toFixed(2)),"cm";
        console.log("El perimetro del circulo es:",perCi.toFixed(2)),"cm";
        break;
    default:
        console.log("Opcion no valida");   
}