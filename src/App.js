import { useState } from "react";
import Title from "./pages/Title";
import ExpensesListPage from "./pages/ExpensesListPage";
import TasksListPage from "./pages/TasksListPage";
import "./index.scss";

const App = () => {
    const [display, setDisplay] = useState("expenses");

    const handleClick = (item) => {
        setDisplay(item)
    };

    return (
        <div className="app">
            <div className="app__container">
                <Title />
                <div className="app__content">
                    {display === "expenses" ? <ExpensesListPage /> : <TasksListPage />}
                </div>
            </div>

            <div className="app__menu">
                <h3 onClick={() => handleClick("expenses")}>Expenses List</h3>
                <h3 onClick={() => handleClick("tasks")}>Tasks List</h3>
            </div>
        </div>
    )
};

export default App;