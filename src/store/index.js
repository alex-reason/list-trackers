import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import { changeSearchTerm, addExpense, removeExpense, expensesReducer } from "./slices/expensesSlice";
import { addTask, removeTask, updateTask, tasksReducer } from "./slices/tasksSlice";
import { changeTaskName, inputReducer } from "./slices/taskInputSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        expenses: expensesReducer,
        tasks: tasksReducer,
        input: inputReducer
    }
});

export { store, changeName, changeCost, changeSearchTerm, addExpense, removeExpense, addTask, removeTask, updateTask, tasksReducer, changeTaskName, inputReducer };