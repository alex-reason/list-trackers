import ExpenseForm from "../components/expenses-tracker/ExpenseForm";
import ExpenseList from "../components/expenses-tracker/ExpenseList";
import ExpenseSearch from "../components/expenses-tracker/ExpenseSearch";
import ExpenseValue from "../components/expenses-tracker/ExpenseValue";

const ExpensesListPage = () => {
    return (
        <div className="expenses">
            <div className="page-title">
                <h1>Expenses List</h1>
                <p>Add items and respective costs to the list.</p>
                <p>
                    Filter the list with the search bar to find only the items you need.
                </p>
                <p>
                    If an item you are about to add is on the list already, it will be highlighted.
                </p>
            </div>
            <ExpenseForm />
            <ExpenseSearch />
            <ExpenseList />
            <ExpenseValue />
        </div>
    )
};

export default ExpensesListPage;