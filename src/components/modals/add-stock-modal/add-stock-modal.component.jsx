import { ReactComponent as CloseSvg } from "../../../assets/close.svg";

import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormInputElement from "../../form/form-input-element.component";

import { addStockStart } from "../../../redux/stocks/stocks-saga.actions";

import schema from "./add-stock.schema";

const AddStockModal = ({ onCloseButtonClick }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(addStockStart(data));
    onCloseButtonClick();
  };
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="mx-auto relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-xl dark:text-white">
              Add Stock
            </h3>
            <button
              onClick={onCloseButtonClick}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <CloseSvg height="20"></CloseSvg>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6 space-y-6">
              <FormInputElement
                id="stockName"
                name="name"
                type="text"
                label="Company name"
                placeholder="Company name"
                register={register}
                errors={errors}
              />
              <FormInputElement
                id="stocksymbol"
                name="symbol"
                type="text"
                label="Symbol"
                placeholder="Symbol"
                register={register}
                errors={errors}
              />
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={onCloseButtonClick}
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="submit"
                disabled={!isValid ? "true" : null}
                className="disabled:opacity-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStockModal;
