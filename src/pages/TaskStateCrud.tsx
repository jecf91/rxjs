import React, { useEffect, useState } from "react";
import { useTasksObservable } from "../hooks/useTaskObservable";
import { ITask } from "../models";

const generateID = () => crypto.randomUUID();

const TaskStateCrud = () => {
  const { getObservable, createTasks, readTasks, updateTasks, deleteTasks } =
    useTasksObservable();

  const [tasks, setTasks] = useState<ITask[]>(readTasks());
  const [inputTaskText, setInputTaskText] = useState("");

  useEffect(() => {
    const tasksObservable = getObservable().subscribe((observableState) => {
      setTasks(observableState);
    });
    return () => tasksObservable.unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputTaskText(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTask = inputTaskText.trim();
    if (!trimmedTask) {
      alert("please add a task");
      return;
    }
    createTasks({ id: generateID(), description: trimmedTask, isDone: false });
    setInputTaskText("");
  };

  const handleRemoveClick = (id: string) => {
    deleteTasks(id);
  };

  const handleDoneClick = (id: string) => {
    updateTasks(id);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <form className="task__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputTaskText}
          onChange={handleChange}
          autoFocus
        />
        <button type="submit" disabled={!inputTaskText.trim().length}>
          Add task
        </button>
      </form>
      {!tasks.length ? (
        <p>No tasks added</p>
      ) : (
        <ul className="task__list">
          {tasks.map(({ id, description, isDone }) => (
            <li className="task__listItem" key={id}>
              <p>{description}</p>
              <button onClick={() => handleDoneClick(id)} disabled={isDone}>
                mark as done
              </button>
              <button onClick={() => handleRemoveClick(id)}>remove task</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskStateCrud;
