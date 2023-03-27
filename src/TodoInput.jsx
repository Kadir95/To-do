import React from "react";


const TodoInput = ({ inputChange, submitChange, value, handleResetButton }) => {
    return (
        <div>
            <form onSubmit={submitChange}>
                <input className=" opacity-80 p-1 rounded-lg" type="text" placeholder="enter to-do" onChange={inputChange} value={value} />
                <button className="ml-3 bg-green-400  rounded-lg p-1 m-1" onClick={submitChange} type="submit">Enter</button>
                <button className="ml-3 bg-red-300 rounded-lg p-1 m-1 " type="reset" onClick={handleResetButton}>Reset</button>
            </form>
        </div>
    )
}


export default TodoInput;