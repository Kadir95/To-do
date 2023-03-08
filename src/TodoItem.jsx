import React from "react";

const TodoItem = ({ name, id, doneChange, deleteChange }) => { // propovi iz parent elementa TodoListe i App
    return (
        <div className="flex ">
            <ul>
                <li className=" mx-3"> {id}. {name} </li> {/* displaj imena tjst svakog todo-a  */}
            </ul>
            <button className="bg-blue-200 " onClick={doneChange}>Done!</button> {/*dugme koje prima prop doneChange i treba da oznaci to-do kao gotov */}
            <button className="bg-red-200 ml-3" onClick={deleteChange}>Delete!</button> {/*dugme koje prima prom deleteChange i treba da izbrise to-do pored kojeg stoji*/}
        </div>
    )
}



export default TodoItem;

