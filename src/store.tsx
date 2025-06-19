import {
  BehaviorSubject,
  combineLatest,
  defer,
  from,
  map,
  Observable,
} from "rxjs";
import { getPersons } from "./services/person";
//import { Person } from "./models";

//both are equivalent to:
// const rawPersons$: Observable<Person[]> = new Observable<Person[]>(subscriber => {
//   getPersons().then(result => {
//     subscriber.next(result);
//     subscriber.complete();
//   });
// });

//SHOTER VERSIONS:
//with defer getPersons() it's "Lazy" is only called at the moment it is subscribed
export const rawPersons$ = defer(() => getPersons());
//with from the promisse getPersons() called immediately
//export const rawPersons$ = from(getPersons());

//DERIVED STATE:
export const selectedPersons$ = new BehaviorSubject<string[]>([]);

//To derive state we use the combineLatest Function
export const mergedPersons$ = combineLatest([
  rawPersons$,
  selectedPersons$,
]).pipe(
  map(([persons, selected]) =>
    persons.map((p) => ({
      ...p,
      selected: selected.includes(p.name),
    }))
  )
);
