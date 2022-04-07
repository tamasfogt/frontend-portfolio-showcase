import * as yup from "yup";
const schema = yup
  .object({
    quantity: yup.integer().required("Quantity is required"),
    price: yup.number().required("Price is required"),
  })
  .required();
export default schema;
