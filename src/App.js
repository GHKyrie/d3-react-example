import './App.css';
import Timeline from "./components/Timeline";
import historicDatesForSkiing from "./data/historicDates";

function App() {
  return (
      <Timeline name={"History of Skiing"}
                data={historicDatesForSkiing} />
  );
}

export default App;