import { BehaviorSubject } from "rxjs";
import { ITask } from "../models";

const tasksSubject$ = new BehaviorSubject<ITask[]>([]);

export const useTasksObservable = () => {
  const getObservable = () => {
    return tasksSubject$.asObservable();
  };

  const createTasks = (payload: ITask) => {
    const tasks = tasksSubject$.getValue();
    const updateArray = [...tasks, payload]; //IMUTABILITY
    tasksSubject$.next(updateArray);
  };

  const readTasks = () => {
    const initialValue = tasksSubject$.getValue();
    return initialValue;
  };

  const updateTasks = (payload: string) => {
    const tasks = tasksSubject$.getValue();
    const updatedTasks = tasks.map((task) =>
      task.id === payload ? { ...task, isDone: true } : task
    );
    tasksSubject$.next(updatedTasks);
  };

  const deleteTasks = (payload: string) => {
    const tasks = tasksSubject$.getValue();
    const updateArray = tasks.filter((t) => t.id !== payload);
    tasksSubject$.next(updateArray);
  };

  return {
    getObservable,
    createTasks,
    readTasks,
    updateTasks,
    deleteTasks,
  };
};
