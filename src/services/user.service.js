import axios from "../utils/axios/axios";

export async function signUpUser(data = {}) {
  const respone = await axios.post("/api/v1/user/sign-up", data);
  return respone.data;
}
export async function signInUser(data = {}) {
  const respone = await axios.post("/api/v1/user/sign-in", data);
  return respone.data;
}
