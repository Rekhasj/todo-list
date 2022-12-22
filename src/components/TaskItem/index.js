import './index.css'

const TaskItem = prop => {
  const {taskDetails} = prop
  const {task} = taskDetails
  console.log(taskDetails)
  return (
    <li className="task-Item-list">
      <p className="task-item-name">{task}: Completed</p>
    </li>
  )
}

export default TaskItem
