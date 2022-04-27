import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All")

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }

  const currentTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <div className="tasks">
        <NewTaskForm 
          categories={CATEGORIES.filter((category) => category !== "All")}
          onTaskFormSubmit={handleAddTask}
        />
        <TaskList onDeleteTask={handleDeleteTask} tasks={currentTasks} />
      </div>
    </div>
  );
}

export default App;
