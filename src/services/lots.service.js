import axios from "../utils/axios/axios";

export async function getLots(params = {}) {
  const respone = await axios.get("/api/v1/projects/", { params });
  return respone.data;
}
// TODO add lot, delete lot, update lot..
