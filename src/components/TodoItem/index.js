import './index.css'

const TodoItem = prop => {
  const {todoDetails, onDelete, onCompletedTask} = prop
  const {task, id} = todoDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  const onClickCompletedTask = () => {
    onCompletedTask(id)
  }

  return (
    <li className="todo-item-card">
      <p className="todo-task-name">{task}</p>
      <div>
        <button
          type="button"
          className="delete-button button"
          onClick={onClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="completed-button button"
          onClick={onClickCompletedTask}
        >
          Completed
        </button>
      </div>
    </li>
  )
}

export default TodoItem
