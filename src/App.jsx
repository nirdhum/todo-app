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

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
      />
    </>
  )
}

export default App
