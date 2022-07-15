import React, { useState } from "react";
import { v4 } from "uuid";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        isCompleted: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: v4() });

            //reset the task input.
            setTodo({ ...todo, task: "" });
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit">+</button>
        </form>
    );
}

export default TodoForm;