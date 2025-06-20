import DoneTasks from "./pages/DoneTasks";
import TaskStateCrud from "./pages/TaskStateCrud";
//import PersonFromFetch from "./pages/PersonFromFetch";
//import PersonFromGlobalStore from "./pages/PersonFromGlobalStore";
//import MergedDataFromGlobalStore from "./pages/MergedDataFromGlobalStore";
//import BehaviorSubjectWay from "./pages/BehaviorSubjectWay";

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
      {/* <BehaviorSubjectWay /> */}
    </main>
  );
}

export default App;
