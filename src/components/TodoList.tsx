import { useNavigate } from "react-router-dom"
import TodoCard from "./TodoCard"

export interface ITodo {
    id: number
    task: string
    startTime: string
    endTime: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TodoList = ({ todos, handleDeleteTodo }: { todos: ITodo[], handleDeleteTodo:(e:number)=> void }) => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>Todo List</h3>
            <button className='btn btn-header' onClick={() => navigate("/add")}>Add Todo</button>
            {todos.map((todo, index) => (
                <div key={index}>
                    {" "}
                    <TodoCard
                        id={todo.id}
                        task={todo.task}
                        startTime={todo.startTime}
                        endTime={todo.endTime}
                        handleDeleteTodo={handleDeleteTodo}
                    />{" "}
                </div>
            ))}
        </div>
    )
}

export default TodoList
