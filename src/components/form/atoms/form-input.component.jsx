import React, { forwardRef } from "react";

const FormInput = forwardRef(
  ({ id, name, label, type = "text", placeholder, ...props }, ref) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        className="form-input px-2 rounded w-full bg-gray-50 border border-gray-300 text-gray-900 "
        {...props}
      />
    );
  }
);
export default FormInput;
