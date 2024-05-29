import React from 'react';
import "./App.css";
import HelloEarth from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import HelloWorld from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import HelloJsd7 from "./components/1.1_myFirstReactComponent/03_ClassComponent";

function App() {
  const a = "Earth!";
  const d = "World!";
  const f = "JSD7!";
  return (
    <div>
      <HelloEarth b={a}/>
      <HelloWorld e={d}/>
      <HelloJsd7 g={f}/>
    </div>
  );
}

export default App;