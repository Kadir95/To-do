import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ todos }) => {
    return (
        <div id="TodoListDiv">
            {
                todos.map((todo, i) => {
                    return <TodoItem
                        name={todos[i].name}
                        id={todos[i].id}
                        key={todos[i].id}
                    />
                })
            }
        </div>
    )
}





export default TodoList;