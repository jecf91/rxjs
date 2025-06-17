import React from "react";
import { useStorePerson } from "../hooks/useStorePerson";
import PersonItem from "../components/PersonItem";
import ButtonArea from "../components/ButtonArea";

const MergedDataFromGlobalStore = () => {
  const { persons } = useStorePerson();
  return (
    <>
      <ButtonArea />
      {React.Children.toArray(
        persons.map((person) => <PersonItem person={person} hasChecker />)
      )}
    </>
  );
};

export default MergedDataFromGlobalStore;
