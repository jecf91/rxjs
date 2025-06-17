import React from "react";
import { useGetPersonFromFetch } from "../hooks/useGetPersonFromFetch";
import PersonItem from "../components/PersonItem";

const PersonFromFetch = () => {
  const { persons } = useGetPersonFromFetch();
  return React.Children.toArray(
    persons.map((person) => <PersonItem person={person} />)
  );
};

export default PersonFromFetch;
