import * as yup from "yup";
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    symbol: yup.string().max(10).required("Symbol is required"),
  })
  .required();
export default schema;
