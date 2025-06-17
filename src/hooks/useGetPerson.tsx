import { useEffect, useState } from "react";
import { rawPersons$ } from "../store";
import { Person } from "../models";

export const useGetPerson = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  useEffect(() => {
    const personSubscription = rawPersons$.subscribe({
      next: setPersons,
      error: (err) => console.error("Error loading persons", err),
      complete: () => console.log("ended request"),
    });
    return () => personSubscription.unsubscribe();
  }, []);
  return { persons };
};
