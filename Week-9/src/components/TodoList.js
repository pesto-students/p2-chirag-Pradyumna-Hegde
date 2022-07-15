import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toogleComplete, removeTodo }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toogleComplete={toogleComplete} removeTodo={removeTodo} />
            ))}
        </ul>
    );
}

export default TodoList;