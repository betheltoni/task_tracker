import {  useState } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import EditTodo from "./components/EditTodo"

function App() {
    const initialTodo = {
        id: 1,
        task: "todo 1",
        startTime: "00:00",
        endTime: "00:00",
    }
    const [todos, setTodos] = useState([initialTodo])
    const id = Math.floor(Math.random() * 1000) + 1
    const [task, setTask] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const handleAddTodo = () => {
        const newTodo = { id, task, startTime, endTime }
        setTodos([...todos, newTodo])
        setTask("")
        setStartTime("")
        setEndTime("")
    }

    const handleDeleteTodo = (id: number) => {
        const updatedTodoList = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(updatedTodoList)
    }

    


    return (
        <div className='container'>
            <div>
                <h2>Task Tracker</h2>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <TodoList
                                todos={todos}
                                handleDeleteTodo={handleDeleteTodo}
                            />
                        }
                    />
                    <Route
                        path="/add"
                        element={
                            <AddTodo
                                task={task}
                                startTime={startTime}
                                endTime={endTime}
                                setTask={setTask}
                                setStartTime={setStartTime}
                                setEndTime={setEndTime}
                                handleAddTodo={handleAddTodo}
                            />
                        }
                    />
                    <Route
                        path="/edit/:id"
                        element={
                            <EditTodo
                                task={task}
                                startTime={startTime}
                                endTime={endTime}
                                setTask={setTask}
                                setStartTime={setStartTime}
                                setEndTime={setEndTime}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
