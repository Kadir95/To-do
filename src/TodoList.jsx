import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ todos }) => {
    return (
        <div>
            {
                todos.map((todo, i) => {
                    return <TodoItem
                        name={todo.name}
                        id={todo.id}
                        key={todo.id}
                        completed={todo.completed}
                    />

                })
            }
        </div>
    )
}





export default TodoList;