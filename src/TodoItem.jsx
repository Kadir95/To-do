import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ id, name, completed, doneChange, deleteChange }) => {
    const textDecoration = completed ? "line-through" : "none"; // ako je todo completed, text decor je line through, else -> none

    return (
        <div className=" ">
            <ul>
                <li className="" style={{ textDecoration }}>
                    {id}. {name}
                    <button className="bg-green-500 text-white py-1 px-1 rounded-lg m-1" onClick={doneChange}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className="bg-red-200 m-1 p-1 rounded-lg " onClick={deleteChange}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default TodoItem;