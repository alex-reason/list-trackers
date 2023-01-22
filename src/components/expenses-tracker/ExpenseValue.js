import { useSelector } from "react-redux";

const ExpenseValue = () => {
    const totalCost = useSelector(({expenses: {data, searchTerm}}) => 
        data
        .filter((expense) => 
            expense.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((acc, expense) => acc + expense.cost, 0)
    );

    return (
        <div className="value">
            Total Cost: ${totalCost}
        </div>
    )
};

export default ExpenseValue;