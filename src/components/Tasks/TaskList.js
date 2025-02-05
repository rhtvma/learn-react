import { useState } from "react"
import TaskCard from "./TaskCard"
import BoxCard from "./BoxCard"
const TaskList = () => {
    const [taskList, setTaskList] = useState([
        { id: 101, name: "Record React lecture", completed: true },
        { id: 102, name: "Make notes", completed: false },
        { id: 103, name: "Take quiz", completed: true }
    ])
    const [toggle, setToggle] = useState(true)

    const handleDelete = (taskId) => {
        setTaskList(taskList.filter(task => task.id !== taskId))
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="TaskList">
            <h1>Task List</h1>
            <button onClick={handleToggle} className="toggle">Toggle</button>
            <ul>
                { toggle && taskList.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                ))
                }
            </ul>

            <BoxCard result="success">
                <p className="title">
                    Title  (success)
                </p>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">
                    Title 2 (warning)
                </p>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </BoxCard>

            <BoxCard result="failed">
                <p className="title">
                    Title 3 (failed)
                </p>
                <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="status">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae consequatur deserunt unde quaerat! Officiis vitae explicabo ab voluptas velit ut! Odio ullam aperiam laudantium illum ipsam a repudiandae iste maiores?</p>
            </BoxCard>
        </div>
    )
}

export default TaskList