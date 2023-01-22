import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        data: []
    },
    reducers: {
        addTask(state, action) {
            state.data.push({
                title: action.payload.title,
                id: nanoid(),
            })
        },
        removeTask(state, action) {
            const updated = state.data.filter(task => {
                return task.id !== action.payload
            });
            state.data = updated;
        },
        updateTask(state, action) {
            let taskToUpdate = state.data.find(elem => elem.id === action.payload.id);
            taskToUpdate.title = action.payload.newTitle;
        }, 
    },
})

export const { addTask, removeTask, updateTask} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;