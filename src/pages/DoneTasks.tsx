import { useEffect, useState } from "react";
import { useTasksObservable } from "../hooks/useTaskObservable";
import { ITask } from "../models";

const DoneTasks = () => {
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);
  const { getObservable } = useTasksObservable();

  useEffect(() => {
    const doneTasksSubcription = getObservable().subscribe((tasks) => {
      const doneTasksFromSubscriptionState = tasks.filter(
        (task) => task.isDone
      );
      setDoneTasks(doneTasksFromSubscriptionState);
    });
    return () => doneTasksSubcription.unsubscribe();
  }, []);

  return (
    <div>
      <h2>Done Tasks</h2>
      {!doneTasks.length ? <p>No tasks done</p> : null}
      <ul>
        {doneTasks.map(({ id, description }) => (
          <li key={id}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneTasks;
