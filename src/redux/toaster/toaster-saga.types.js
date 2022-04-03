import ToastActionTypes from "./toaster.types";
export const newToast = (toastData) => ({
  type: ToastActionTypes.NEW_TOAST,
  payload: toastData,
});
export const removeToast = (toastData) => ({
  type: ToastActionTypes.REMOVE_TOAST,
  payload: toastData,
});
