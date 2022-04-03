import * as yup from "yup";
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords does not match"),
  })
  .required();
export default schema;
