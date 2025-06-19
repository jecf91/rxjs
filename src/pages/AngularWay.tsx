// components/PersonList.tsx
import { useEffect, useState } from "react";
import { personStoreAngular, PersonState } from "../storeAngularStyle";
import PersonItem from "../components/PersonItem";
import React from "react";

const AngularWay = () => {
  const [personStore, setPersonStore] = useState<PersonState>({
    data: [],
    error: null,
    loading: false,
  });

  useEffect(() => {
    const personsSub = personStoreAngular.getState().subscribe(setPersonStore);
    personStoreAngular.load();
    return () => {
      personsSub.unsubscribe();
    };
  }, []);

  if (personStore.loading) return <p>Loading...</p>;
  if (personStore.error)
    return (
      <div>
        <p>Error: {personStore.error}</p>
        <button onClick={personStoreAngular.retry}>Retry</button>
      </div>
    );

  return React.Children.toArray(
    personStore.data.map((person) => <PersonItem person={person} />)
  );
};

export default AngularWay;
