import { useSelector, useDispatch } from "react-redux";
import { removeExpense } from "../../store";
import { ImCross } from "react-icons/im";

const ExpenseList = () => {
    const dispatch = useDispatch();
    const { expenses, name } = useSelector(({ form, expenses: { data, searchTerm } }) => {
        const filteredExpenses = data.filter((expense) =>
            expense.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return {
            expenses: filteredExpenses,
            name: form.name
        };
    });

    const handleExpenseDelete = (expense) => {
        dispatch(removeExpense(expense.id))
    };

    const renderedExpenses = expenses.map(expense => {
        const highlighted = name && expense.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={expense.id} className={`list__item ${highlighted && 'highlighted'}`}>
                <p>
                    {expense.name} - ${expense.cost}
                </p>
                <ImCross onClick={() => handleExpenseDelete(expense)} />
            </div>
        )
    });

    return (
        <div className="list">
            {renderedExpenses}
        </div>
    )
};

export default ExpenseList;