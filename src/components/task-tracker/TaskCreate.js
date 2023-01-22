import { useSelector } from "react-redux";
import { changeTaskName, addTask } from "../../store";
import useInputData from "../../hooks/useInputData";
import Form from "../utils/Form";

const TaskCreate = () => {
    const { title } = useSelector(state => {
        return { title: state.input.title }
    });
  
    const {handleNameChange, handleSubmit} = useInputData(changeTaskName, addTask({ title }));

    const renderedInput = (
        <div>
            <label>Name</label>
            <input value={title} onChange={handleNameChange} />
        </div>
    );

    return (
        <Form handleSubmit={handleSubmit} inputs={renderedInput}/>
    )
};

export default TaskCreate;


