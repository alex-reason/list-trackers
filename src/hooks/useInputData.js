import { useDispatch } from "react-redux";

const useInputData = (changeNameReducer, addReducer) => {
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        dispatch(changeNameReducer(event.target.value))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addReducer)
    };

    return { dispatch, handleNameChange, handleSubmit }
};

export default useInputData;