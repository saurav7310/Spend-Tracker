import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const totalAmount = useSelector((store) => store.EXPENSE.income);
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const totalExpense = expenseList.reduce(
    (acc, curr) => acc + Number.parseInt(curr.price),
    0
  );
  const remainingMoney = totalAmount - totalExpense;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense}$</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney}$</div>
      </div>
    </div>
  );
}
