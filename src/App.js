import "./App.css";

import { Box } from "./components/Box/index";

function App() {
  // Create List of 9 boxes
  const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  return (
    <div className="App">
      <Box value="X" onClick={null} />
    </div>
  );
}

export default App;
