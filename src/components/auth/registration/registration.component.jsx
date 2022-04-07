import { useDispatch } from "react-redux";

import schema from "./registration.schema";
import { useForm } from "react-hook-form";

import redirectOnSignIn from "../redirect-on-sign-in/redirect-on-sign-in.component";
import FormInputElement from "../../form/form-input-element.component";
import { yupResolver } from "@hookform/resolvers/yup";

import { signUpStart } from "../../../redux/user/user-saga.actions";

const Registration = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(signUpStart(data));
  };
  return (
    <div className="my-8 w-full mx-3">
      <div className=" bg-white rounded overflow-hidden shadow-lg border   p-3">
        <h1 className="text-center font-semibold">Sign up</h1>
        <h2 className="text-center">Sign up with your email and password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInputElement
            id="registrationName"
            name="name"
            type="text"
            label="Name"
            placeholder="Name"
            register={register}
            errors={errors}
          />
          <FormInputElement
            id="registrationEmail"
            name="email"
            type="email"
            label="Email address"
            placeholder="Email address"
            register={register}
            errors={errors}
          />
          <FormInputElement
            id="registrationPassword"
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            register={register}
            errors={errors}
          />
          <FormInputElement
            id="registrationConfirmPassword"
            name="passwordConfirm"
            type="password"
            label="Confrim password"
            placeholder="Confrim password"
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            disabled={!isValid ? "true" : null}
            className="disabled:opacity-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default redirectOnSignIn(Registration);
