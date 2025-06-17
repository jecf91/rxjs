import { Person } from "../models";
import { selectedPersons$ } from "../store";

interface PersonItemProps {
  person: Person;
  hasChecker?: boolean;
}

type CheckCharcaterProps = Omit<PersonItemProps, "hasChecker">;

const CheckCharcater = ({ person }: CheckCharcaterProps) => {
  const handleChange = () => {
    const current = selectedPersons$.value;
    const name = person.name;

    if (current.includes(name)) {
      selectedPersons$.next(current.filter((n) => n !== name));
    } else {
      selectedPersons$.next([...current, name]);
    }
  };
  return (
    <input type="checkbox" checked={person.selected} onChange={handleChange} />
  );
};

const PersonItem = ({ person, hasChecker = false }: PersonItemProps) => {
  return (
    <div className="personItem">
      <h2>{person.name}</h2>
      <p>{person.birth_year}</p>
      {hasChecker ? <CheckCharcater person={person} /> : null}
    </div>
  );
};

export default PersonItem;
