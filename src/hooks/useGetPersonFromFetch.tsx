import { useEffect, useState } from "react";
import { fromFetch } from "rxjs/fetch";
import { concatMap } from "rxjs/operators";
import { Person } from "../models";
import { of } from "rxjs";

export const useGetPersonFromFetch = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    //fromFetch Uses the Fetch API to make an HTTP request and returns an Observable.
    const subscription = fromFetch("https://swapi.info/api/people")
      //PIPE is method that receives a list of operators and returns a new obsvervable
      //it executes the operators sequentially.
      .pipe(
        //concatMap is a operator that allows you to transform
        // and transfers it to the next operator in the sequence
        concatMap((response) => {
          if (response.ok) {
            return response.json();
          } else {
            //of returns Observable that synchronously emits
            // the arguments and then immediately completes.
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
