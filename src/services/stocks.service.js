import axios from "../utils/axios/axios";

export async function getStocks(params = {}) {
  const respone = await axios.get("/api/v1/stocks/", { params });
  return respone.data;
}
export async function addStock(data) {
  const respone = await axios.post("/api/v1/stocks/", data);
  return respone.data;
}
export async function deleteStock(id) {
  const respone = await axios.delete(`/api/v1/stocks/${id}`);
  return respone.data;
}
