import TaskCreate from "../components/task-tracker/TaskCreate";
import TaskList from "../components/task-tracker/TaskList";

const TasksListPage = () => {
    return (
        <div className="task">
            <div className="page-title">
                <h1>Tasks List</h1>
                <p>A simple task list tracker.</p>
                <p>Add items to the list. Edit task or remove a task by clicking on the buttons.</p>
            </div>
            <TaskCreate />
            <TaskList />
        </div>
    )
};

export default TasksListPage;