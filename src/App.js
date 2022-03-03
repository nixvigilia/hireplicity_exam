import "./App.css";
import Duplicate from "./components/Duplicate";
import Factorial from "./components/Factorial";
import FindValue from "./components/FindValue";
import RegExp from "./components/RegExp";
import Shuffle from "./components/Shuffle";

function App() {
  return (
    <div className="App">
      <Factorial />
      <FindValue />
      <Shuffle />
      <Duplicate />
      <RegExp />
    </div>
  );
}

export default App;
