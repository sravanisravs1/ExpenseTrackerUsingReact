import axios from "axios";
import { expensesActions } from "../../store/ExpenseSlicer";

export async function getExpenses(dispatch) {
    const res = await axios.get('https://reacthttp-37efe-default-rtdb.firebaseio.com/expenses.json');
    const data = [];
    let sum = 0;
      for (let key in res.data) {
        data.push({ id: key, ...res.data[key]});
        sum += +res.data[key].Amount;
        // setExpenses([])
        // setExpenses((prev)=>[...prev, { id: key, ...res.data[key]}])
    }
    dispatch(expensesActions.setExpenses({ data: data, total: sum}));
}

export async function deleteExpanse(id, dispatch) {
    const res = await axios.delete(`https://reacthttp-37efe-default-rtdb.firebaseio.com/expenses/${id}.json`)
    await getExpenses(dispatch);
}

export async function editExpense(id, item, dispatch) {
    const res = await axios.put(`https://reacthttp-37efe-default-rtdb.firebaseio.com/expenses/${id}.json`, item);
    await getExpenses(dispatch);
}

export async function postExpenses(item, dispatch){
    const res = await axios.post('https://reacthttp-37efe-default-rtdb.firebaseio.com/expenses.json',item);
    await getExpenses(dispatch)
}