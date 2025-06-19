import { BehaviorSubject } from "rxjs";
import { ITask } from "../models";

//The most important concept in RxJS is the Observable,
//which is an object that can emit values at any time, with subscribers following updates.
//There is a convention of suffixing observables with a $ sign,
//RxJS’s BehaviorSubject is a stateful observable
//stateful observables emit an event every time the value changes.
//And all subscribers see the same events at the same time
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
