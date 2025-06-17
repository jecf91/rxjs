import { Person } from "../models";

export function getPersons(): Promise<Person[]> {
  return fetch("https://swapi.info/api/people").then((res) => res.json());
}
