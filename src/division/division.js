// unidad de prueba
// ¿ Qué hace la función dos numeros ? la division de dos numeros
function division(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
      return "datos invalidos";
    }
    return num1 / num2;
  }
  
  module.exports = division;