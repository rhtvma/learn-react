const TaskCard = (props) => {
    return (
            <li className={props.task.completed ? "completed": "incomplete"}>
                <span> {props.task.id} - {props.task.name}</span>
                <button onClick={() => { props.handleDelete(props.task.id) }} className="delete">DELETE</button>
            </li>
    )
}

export default TaskCard