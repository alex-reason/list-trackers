import { useState } from "react";
import { updateTask } from "../../store";
import { useDispatch } from "react-redux";
import { RiSave2Fill } from "react-icons/ri";

const TaskEdit = ({ task, onSubmit }) => {
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTask({ id: task.id, newTitle: title }));
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="task__edit">
      <input
        className="input"
        value={title}
        onChange={handleChangeTitle}
      />
      <button>
        <RiSave2Fill />
      </button>
    </form>
  )
};

export default TaskEdit;