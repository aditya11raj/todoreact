import React from "react"
import TodoItem from "./components/todoitem"
import "./style.css"
function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App