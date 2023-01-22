import { createSlice, nanoid } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: "expenses",
    initialState: {
        searchTerm: "",
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addExpense(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeExpense(state, action) {
            const updated = state.data.filter(expense => {
                return expense.id !== action.payload
            });
            state.data = updated;
        },
    },
})

export const { changeSearchTerm, addExpense, removeExpense} = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;