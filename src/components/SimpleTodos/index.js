import {Component} from 'react'
import {v4} from 'uuid'
import TodoItem from '../TodoItem'
import TaskItem from '../TaskItem'

import './index.css'

class SimpleTodos extends Component {
  state = {userTask: '', todoList: [], completedTaskList: []}

  onChangeUserInput = event => {
    this.setState({userTask: event.target.value})
  }

  onSubmitTask = event => {
    event.preventDefault()

    const {userTask} = this.state

    const updatedTodoList = {
      id: v4(),
      task: userTask,
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, updatedTodoList],
      userTask: '',
    }))
  }

  onDelete = id => {
    const {todoList} = this.state

    const deletedTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: deletedTodoList})
  }

  onCompletedTask = id => {
    const {todoList} = this.state
    const completedList = todoList.filter(eachTodo => eachTodo.id === id)
    console.log(completedList)
    const updatedCompletedList = {
      id: completedList[0].id,
      task: completedList[0].task,
    }

    this.setState(prevState => ({
      completedTaskList: [...prevState.completedTaskList, updatedCompletedList],
    }))
  }

  render() {
    const {userTask, todoList, completedTaskList} = this.state
    // console.log(todoList)
    // console.log(completedTaskList)
    return (
      <div className="main-container">
        <div className="task-container">
          <div className="task-card">
            <h1 className="heading">Simple Todos</h1>
            <form className="form-container" onSubmit={this.onSubmitTask}>
              <input
                type="text"
                value={userTask}
                className="user-input"
                placeholder="Enter Task Here"
                onChange={this.onChangeUserInput}
              />
              <button type="submit" className="add-button button">
                Add
              </button>
            </form>
          </div>
          <div className="task-card">
            <h1 className="heading">My Tasks</h1>
            <ul className="my-tasks-list-container">
              {todoList.map(eachTodo => (
                <TodoItem
                  key={eachTodo.id}
                  todoDetails={eachTodo}
                  onDelete={this.onDelete}
                  onCompletedTask={this.onCompletedTask}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="completed-task-container">
          <h1 className="heading">Completed Tasks</h1>
          <ul className="my-tasks-list-container">
            {completedTaskList.map(eachTask => (
              <TaskItem key={eachTask.id} taskDetails={eachTask} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
