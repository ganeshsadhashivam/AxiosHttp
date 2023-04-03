import { useState } from "react";

import "./App.css";
import Title from "../components/Title";
import Setup from "../examples/FirstRequest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title />
      <Setup />
    </div>
  );
}

export default App;
