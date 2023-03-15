import React from "react";


const TodoInput = ({ inputChange, submitChange, value, handleResetButton }) => {
    return (
        <div>
            <form onSubmit={submitChange}>
                <input className=" opacity-80" type="text" placeholder="enter to-do" onChange={inputChange} value={value} />
                <button className="ml-3 bg-green-400 " onClick={submitChange} type="submit">Enter</button>
                <button className="ml-3 bg-red-600 " type="reset" onClick={handleResetButton}>Reset</button>
            </form>
        </div>
    )
}


export default TodoInput;