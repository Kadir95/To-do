import React from "react";


const TodoInput = ({ inputChange, submitChange }) => {
    return (
        <div>
            <form onSubmit={submitChange}>
                <input type="text" placeholder="enter to-do" onChange={inputChange} />
                <button onClick={submitChange} type="submit">Enter</button>
                <button type="reset" className="ml-3">Reset</button>
            </form>
        </div>
    )
}


export default TodoInput;