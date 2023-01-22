import { ImCheckmark } from "react-icons/im";
import { HiPencil} from "react-icons/hi";
import { useState } from "react";
import TaskEdit from "./TaskEdit";

const TaskShow = ({ task, handleTaskDelete }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleTaskEdit = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <p>{task.title}</p>;

    if (showEdit) {
        content = <TaskEdit onSubmit={handleSubmit} task={task} />
    };

    const buttons = (
        <div className="task__actions">
            <HiPencil onClick={handleTaskEdit} />
            <ImCheckmark className="check" onClick={() => handleTaskDelete(task)} />
        </div>
    );

    return (
        <div className="list__item">
            {content}
            {!showEdit && buttons}
        </div>
    )
};

export default TaskShow;