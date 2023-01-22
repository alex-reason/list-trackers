import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../store";

import TaskShow from "./TaskShow";

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => {
        return { tasks: state.tasks.data }
    });

    const handleTaskDelete = (task) => {
        dispatch(removeTask(task.id))
    };

    const renderedTasks = tasks.map(task => {
        return <TaskShow key={task.id} task={task} handleTaskDelete={handleTaskDelete}/>
    });

    return (
        <div className="task__list">
            {renderedTasks}
        </div>
    )
}
export default TaskList;