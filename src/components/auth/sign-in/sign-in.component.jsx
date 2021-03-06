import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import redirectOnSignIn from "../redirect-on-sign-in/redirect-on-sign-in.component";

import FormInputElement from "../../form/form-input-element.component";
import { yupResolver } from "@hookform/resolvers/yup";

import SignInSchema from "./sign-in.schema.js";
import { signInStart } from "../../../redux/user/user-saga.actions";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SignInSchema),
  });
  const onSubmit = (data) => {
    dispatch(signInStart(data));
  };

  return (
    <div className="my-8 w-full mx-3">
      <div className="bg-white  rounded overflow-hidden shadow-lg border    p-3">
        <h1 className="text-center font-semibold">Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInputElement
            id="email"
            name="email"
            type="email"
            label="Email address"
            placeholder="Email address"
            register={register}
            errors={errors}
          />
          <FormInputElement
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            register={register}
            errors={errors}
          />
          <button
            disabled={!isValid ? "true" : null}
            type="submit"
            className="disabled:opacity-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign in
          </button>
        </form>
        <div className="text-center">
          Don't have an account yet?
          <Link
            to="/registration"
            className="w-full mt-2 px-4 py-2 text-indigo-600 text-base font-medium  hover:text-indigo-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default redirectOnSignIn(SignIn);
