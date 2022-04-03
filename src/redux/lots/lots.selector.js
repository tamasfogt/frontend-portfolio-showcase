import { createSelector } from "reselect";

const selectLots = (state) => state.lots;

export const selectAllLots = createSelector(
  [selectLots],
  (lotsState) => lotsState.coins
);
// TODO kérd le az adott stockhoz tartozó lotokat
