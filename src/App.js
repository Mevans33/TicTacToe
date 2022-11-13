import "./App.css";

import { Board } from "./components/Board/index";

function App() {
  // Create List of 9 boxes
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;
