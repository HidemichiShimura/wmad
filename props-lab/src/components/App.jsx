import "../styles/App.css";

import { Card } from ".";

import DataList from "../data.json";

function App() {
  return (
    <div className="App">
      {DataList.map((data, idx) => (
        <Card {...data} key={idx} />
      ))}
    </div>
  );
}

export default App;
