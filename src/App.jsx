import { ExpenseTotal } from "container/ExpenseTotal/ExpenseTotal";
import { ExpenseInput } from "container/ExpenseInput/ExpenseInput";
import ExpenseList from "container/expenseList/ExpenseList";
import { IncomeInput } from "container/IncomeInput/IncomeInput";
import s from "./style.module.css";
import { Logo } from "components/Logo/Logo";

export function App() {
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title="TrAcKeR" subtitle="Track The Expense" />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <ExpenseList />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
