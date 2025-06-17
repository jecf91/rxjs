import { useEffect, useState } from "react";
import { mergedPersons$ } from "../store";
import { Person } from "../models";

export const useStorePerson = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    const subscription = mergedPersons$.subscribe(setPersons);
    return () => subscription.unsubscribe();
  }, []);

  return { persons };
};
