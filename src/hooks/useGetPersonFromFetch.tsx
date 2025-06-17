import { useEffect, useState } from "react";
import { fromFetch } from "rxjs/fetch";
import { concatMap } from "rxjs/operators";
import { Person } from "../models";
import { of } from "rxjs";

export const useGetPersonFromFetch = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    const subscription = fromFetch("https://swapi.info/api/people")
      .pipe(
        concatMap((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return of({ results: [] });
          }
        })
      )
      .subscribe({
        next: (data) => {
          setPersons(data);
        },
        error: (err) => console.error("Error loading persons", err),
        complete: () => console.log("ended request"),
      });

    return () => subscription.unsubscribe();
  }, []);

  return { persons };
};
