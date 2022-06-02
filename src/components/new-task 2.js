import { useState } from "react";

export function NewTask({ addTask }) {
  const emptyTask = {
    title: "",
    responsible: "",
    id: Math.random() * 10000,
    isComplete: false,
  };

  const [newTask, setNewTask] = useState(emptyTask);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTask(newTask);
    setNewTask(emptyTask);
  };

  const handleChange = (ev) => {
    setNewTask({ ...newTask, [ev.target.name]: ev.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="title"
        value={newTask.title}
      />
      <input
        onChange={handleChange}
        type="text"
        name="responsible"
        placeholder="responsible"
        value={newTask.responsible}
      />
      <button type="submit">Create</button>
    </form>
  );
}
