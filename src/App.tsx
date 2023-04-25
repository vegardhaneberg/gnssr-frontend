import { useState } from "react";
import "./App.css";
import MapComponent from "./components/MapComponent/MapComponent";

function App() {
  return (
    <div className="container">
      <h1>GNSSR TOOLBOX</h1>
      <MapComponent />
    </div>
  );
}

export default App;
