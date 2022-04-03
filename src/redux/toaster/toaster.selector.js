import { createSelector } from "reselect";

const selectToaster = (state) => state.toaster;

export const selectToastList = createSelector(
  [selectToaster],
  (toast) => toast.toasts
);
