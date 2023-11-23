const resta = require("./resta");

test("40 - 20 should be 20", () => {
  // sujeto de prueba
  const result = resta(40, 20);
  // test
  expect(result).toBe(20);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = resta("40", "20");
  expect(result).toBe(err);
});