import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 0,
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

const expenseReducer = expenseSlice.reducer;
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

export { expenseReducer };
