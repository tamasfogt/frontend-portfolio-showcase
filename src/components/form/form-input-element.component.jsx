import React from "react";
import FormInput from "./atoms/form-input.component";
import FormInputLabel from "./atoms/form-input-label.component";
import FormInputError from "./atoms/form-input-error.component";
const FormInputElement = ({
  name,
  label,
  register,
  rules,
  errors,
  className,
  ...props
}) => (
  <div className="my-2">
    <FormInputLabel label={label} />
    <FormInput name={name} {...(register && register(name))} {...props} />
    <FormInputError>{errors[name]?.message}</FormInputError>
  </div>
);
export default FormInputElement;
