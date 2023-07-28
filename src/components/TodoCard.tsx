import { useNavigate } from "react-router-dom"

const TodoCard = ({
    id,
    task,
    startTime,
    endTime,
    handleDeleteTodo
}: {
    id: number
    task: string
    startTime: string
    endTime: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleDeleteTodo: (e: number)=>void
}) => {
    const navigate = useNavigate()
    return (
        <div className="task">
            <h3>{task}</h3>
            <p>
                {startTime} <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
            </p>
            <p>
                {endTime} <button onClick={()=> handleDeleteTodo(id)}>Delete</button>
            </p>
        </div>
    )
}

export default TodoCard
