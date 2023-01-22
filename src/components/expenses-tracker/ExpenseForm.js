import { useSelector } from "react-redux";
import { changeName, changeCost, addExpense } from "../../store";
import useInputData from "../../hooks/useInputData";
import Form from "../utils/Form";

const ExpenseForm = () => {
    const { name, cost } = useSelector(state => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    const handleCostChange = (event) => {
        const expenseCost = parseFloat(event.target.value) || 0;
        dispatch(changeCost(expenseCost))
    };

    const { dispatch, handleNameChange, handleSubmit } = useInputData(changeName, addExpense({ name, cost }));

    const renderedInputs = (
        <>
            <div>
                <label>Name</label>
                <input value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label>Cost</label>
                <input type="number" step="0.01" value={cost || ""} onChange={handleCostChange} />
            </div>
        </>
    );

    return (
        <Form handleSubmit={handleSubmit} inputs={renderedInputs} />
    )
};

export default ExpenseForm;