import { useState } from "react";
import { Header } from "./components/header";
import { Tasks } from "./components/tasks";

function App() {

  const [tasks, setTasks] = useState([])

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTasks(newTasks)
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
      />
    </>
  )
}

export default App
