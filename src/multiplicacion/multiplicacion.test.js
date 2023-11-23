const multiplicacion = require("./multiplicacion");

test("5 * 2 should be 10", () => {
  // sujeto de prueba
  const result = multiplicacion(5, 2);
  // test
  expect(result).toBe(10);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = multiplicacion("5", "2");
  expect(result).toBe(err);
});