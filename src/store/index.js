import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./slices/expense-slice";

const store = configureStore({
  reducer: {
    EXPENSE: expenseReducer,
  },
});

export { store };
