test("GET to /api/v1/status should return status 200 and correct message", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return correct JSON message", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const data = await response.json();

  expect(data).toEqual({ chave: "API is running smoothly!" });
});
