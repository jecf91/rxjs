//import PersonFromFetch from "./pages/PersonFromFetch";
//import PersonFromGlobalStore from "./pages/PersonFromGlobalStore";
//import MergedDataFromGlobalStore from "./pages/MergedDataFromGlobalStore";

import DoneTasks from "./pages/DoneTasks";
import TaskStateCrud from "./pages/TaskStateCrud";

function App() {
  return (
    <main className="container">
      <div className="tasks__container">
        <TaskStateCrud />
        <DoneTasks />
      </div>
      {/* <PersonFromFetch /> */}
      {/* <PersonFromGlobalStore /> */}
      {/* <MergedDataFromGlobalStore /> */}
    </main>
  );
}

export default App;
