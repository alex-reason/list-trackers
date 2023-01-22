import { createSlice } from "@reduxjs/toolkit";
import { addTask } from "./tasksSlice";
const inputSlice = createSlice({
    name: "input",
    initialState:{
        title: ""
    },
    reducers: {
        changeTaskName(state, action) {
            state.title = action.payload
        },
    },
    extraReducers(builder){
        builder.addCase(addTask, (state, action) => {
            state.title = "";
        })
    } 
});


export const { changeTaskName } = inputSlice.actions;
export const inputReducer = inputSlice.reducer;