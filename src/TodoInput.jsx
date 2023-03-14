import React from "react";


const TodoInput = ({ inputChange, submitChange, value, handleResetButton }) => {
    return (
        <div>
            <form onSubmit={submitChange}>
                <input type="text" placeholder="enter to-do" onChange={inputChange} value={value} />
                <button onClick={submitChange} type="submit">Enter</button>
                <button type="reset" className="ml-3" onClick={handleResetButton}>Reset</button>
            </form>
        </div>
    )
}


export default TodoInput;