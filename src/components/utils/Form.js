const Form = ({ handleSubmit, inputs }) => {
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form__container">
                    <div className="form__inputs">
                        {inputs}
                    </div>
                    <button className="button">Add to List</button>
                </div>
            </form>
        </div>
    )
};

export default Form;