import { useNavigate, useParams } from "react-router-dom"
import { ITodo } from "./TodoList"

const EditTodo = ({
    task,
    startTime,
    endTime,
    setTask,
    setStartTime,
    setEndTime,
    todos,
    setTodos,
}: {
    task: string
    startTime: string
    endTime: string
    setTask: React.Dispatch<React.SetStateAction<string>>
    setStartTime: React.Dispatch<React.SetStateAction<string>>
    setEndTime: React.Dispatch<React.SetStateAction<string>>
    todos: ITodo[]
    setTodos: React.Dispatch<
        React.SetStateAction<
            {
                id: number
                task: string
                startTime: string
                endTime: string
            }[]
        >
    >
}) => {
    const { id } = useParams<string>()
    const navigate = useNavigate()
    const changeTodo = todos.filter((todo) => {
        return todo.id === Number(id)
    })

    const handleEditTodo = (editedTodo: {
        task: string
        startTime: string
        endTime: string
    }) => {
        const updatedTodoList = todos.map((todo) => {
            if (todo.id === Number(id)) {
                todo.task = editedTodo?.task
                todo.startTime = editedTodo?.startTime
                todo.endTime = editedTodo?.endTime
            }
            return todo
        })
        setTodos(updatedTodoList)
    }

    return (
        <form
            className="add-task"
            action=""
            onSubmit={(e) => {
                e.preventDefault()
                handleEditTodo({
                    task: task,
                    startTime: startTime,
                    endTime: endTime,
                })
                navigate("/")
            }}
        >
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input
                    type="text"
                    defaultValue={changeTodo[0]?.task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="startTime">Start Time</label>
                <input
                    type="time"
                    defaultValue={changeTodo[0]?.startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="endTime">End Time</label>
                <input
                    type="time"
                    defaultValue={changeTodo[0]?.endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
            <button className='btn btn-block' type="submit">Edit</button>
            <button className='btn btn-block' onClick={() => navigate("/")}>Back</button>
        </form>
    )
}

export default EditTodo
