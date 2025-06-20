import React from "react";
import { useBehaviorSubjectStore } from "../hooks/useBehaviorSubjectStore";
import PersonItem from "../components/PersonItem";

const BehaviorSubjectWay = () => {
  const { data, loading, error, retry } = useBehaviorSubjectStore();

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );

  return React.Children.toArray(
    data.map((person) => <PersonItem person={person} />)
  );
};

export default BehaviorSubjectWay;
