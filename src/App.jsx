import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Tasks } from "./components/tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks"

function App() {

  const [tasks, setTasks] = useState([])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function setTaskAndSave(newTasks) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskTitle) {
    setTaskAndSave([
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
    setTaskAndSave(newTasks)
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTaskAndSave(newTasks)
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
