import { Habit } from "./components/habit";

function App() {
  return (
    <div className="App">
      <Habit completed={5} />
      <Habit completed={4} />
      <Habit completed={3} />
      <Habit completed={2} />
      <Habit completed={1} />
      <Habit completed={0} />
    </div>
  );
}

export default App;
