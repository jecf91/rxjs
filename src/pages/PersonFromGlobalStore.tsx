import React from "react";
import PersonItem from "../components/PersonItem";
import { useGetPerson } from "../hooks/useGetPerson";

const PersonFromGlobalStore = () => {
  const { persons } = useGetPerson();

  return React.Children.toArray(
    persons.map((person) => <PersonItem person={person} />)
  );
};

export default PersonFromGlobalStore;
