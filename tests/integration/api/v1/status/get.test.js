test("GET para /api/v1/status deve retornar 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response);
  expect(response.status).toBe(200);
});