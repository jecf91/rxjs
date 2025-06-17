import { selectedPersons$ } from "../store";

const ButtonArea = () => {
  const valueFromStore = selectedPersons$.value;
  const isNoneSelected = !valueFromStore.length;

  function handleClick() {
    if (isNoneSelected) {
      alert("No one is selected");
      return;
    }
    alert("You have selected : " + [...valueFromStore]);
  }

  function handleReset() {
    if (isNoneSelected) {
      return;
    }
    selectedPersons$.next([]);
  }

  return (
    <div className="button__container">
      <button onClick={handleClick}>say who is selected</button>
      <button disabled={isNoneSelected} onClick={handleReset}>
        remove selected
      </button>
    </div>
  );
};

export default ButtonArea;
