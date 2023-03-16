import React from "react";

const TodoItem = ({ name, id, doneChange, completed, deleteChange }) => { // propovi iz parent elementa TodoListe i App
    const textDecoration = completed ? "line-through" : "none";
    return (
        <div className="flex ">
            <ul>
                <li className="" style={{ textDecoration: textDecoration }}> {id}. {name}  {/* displaj imena tjst svakog todo-a  */}
                    <button className="bg-blue-200 m-1" onClick={doneChange}>Done!</button> {/*dugme koje prima prop doneChange i treba da oznaci to-do kao gotov */}
                    <button className="bg-red-200 m-1" onClick={deleteChange}>Delete!</button> {/*dugme koje prima prom deleteChange i treba da izbrise to-do pored kojeg stoji*/}
                </li>
            </ul>
        </div>
    )
}




export default TodoItem;

