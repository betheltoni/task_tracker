import { useNavigate } from "react-router-dom"

const AddTodo = ({
    task,
    startTime,
    endTime,
    setTask,
    setStartTime,
    setEndTime,
    handleAddTodo,
}: {
    task: string
    startTime: string
    endTime: string
    setTask: React.Dispatch<React.SetStateAction<string>>
    setStartTime: React.Dispatch<React.SetStateAction<string>>
    setEndTime: React.Dispatch<React.SetStateAction<string>>
    handleAddTodo: () => void
}) => {
    const navigate = useNavigate()
    return (
        <form
            className="add-task"
            action=""
            onSubmit={(e) => {
                e.preventDefault()
                handleAddTodo()
                navigate("/")
            }}
        >
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="startTime">Start Time</label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="endTime">End Time</label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
            <button className='btn btn-block' type="submit">Save</button>
            <button className='btn btn-block' onClick={() => navigate("/")}>Back</button>
        </form>
    )
}

export default AddTodo
