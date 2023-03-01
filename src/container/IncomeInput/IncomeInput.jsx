import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "store/slices/expense-slice";
import s from "./style.module.css";

export function IncomeInput(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();

  const setIncome = (e) => {
    dispatch(setIncomeAction(Number.parseInt(e.target.value)));
  };
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={setIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
