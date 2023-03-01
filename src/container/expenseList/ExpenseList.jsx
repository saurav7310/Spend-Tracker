import { List } from "components/List/List";
import React from "react";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  return (
    <div>
      <List items={expenseList} />
    </div>
  );
};

export default ExpenseList;
