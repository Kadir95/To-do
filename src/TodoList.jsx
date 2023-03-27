import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ todos, doneChange, deleteChange }) => {
    return (
        <div className="font-sans font-semibold ">
            {
                todos.map((todo, i) => {
                    return <TodoItem
                        name={todo.name}
                        id={todo.id}
                        key={todo.id}
                        completed={todo.completed}
                        doneChange={() => doneChange(todo.id)}
                        deleteChange={() => deleteChange(todo.id)}
                    />
                })
            }
        </div>
    )
}





export default TodoList;