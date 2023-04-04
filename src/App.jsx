import { useState } from "react";

import "./App.css";
import Title from "../components/Title";
// import Setup from "../examples/FirstRequest";
// import Setup from "../examples/Headers";
//import Setup from "../examples/PostRequest";

// import Setup from "../examples/GlobalDefaults";
// import "../Axios/Global";
// import Setup from "../examples/CustomInstance";
import Setup from "../examples/Interceptors";
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
