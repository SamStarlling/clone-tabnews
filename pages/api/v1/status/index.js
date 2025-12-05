function status(request, response) {
  // Status Code: 200 (OK - Successful HTTP request)
  response.status(200).json({
    chave: "API is running smoothly!",
  });
}
export default status;
