import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store";

const ExpenseSearch = () => {
    const dispatch = useDispatch();
    const { searchTerm } = useSelector(state => {
        return state.expenses.searchTerm;
    });
    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    };

    return (
        <div className="search">
            <label>Search</label>
            <input value={searchTerm} onChange={handleSearchTermChange} />
        </div>
    )
};

export default ExpenseSearch;