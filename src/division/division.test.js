const division = require("./division");

test("6 / 2 should be 3", () => {
  // sujeto de prueba
  const result = division(6, 2);
  // test
  expect(result).toBe(3);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = division("6", "2");
  expect(result).toBe(err);
});