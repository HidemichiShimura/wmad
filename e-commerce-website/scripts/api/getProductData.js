const URL = "https://web-dev-2-final.free.beeceptor.com";

async function getProductData(id) {
  const Response = await axios.get(URL);
  const Data = Response.data[id];

  return Data;
}
