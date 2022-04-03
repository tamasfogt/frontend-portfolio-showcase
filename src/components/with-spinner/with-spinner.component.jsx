import React from "react";
import { ReactComponent as SpinnerIcon } from "../../assets/spinner.svg";
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...props }) => {
    console.log("loading" + isLoading);
    return isLoading ? (
      <div className="font-semibold">
        <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400 inline"></SpinnerIcon>
        Loading...
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return Spinner;
};

export default WithSpinner;
