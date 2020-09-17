import React from "react";
import "./App.css";
import styles from "./mainGrid.module.css";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <div className="labelNetto">Netto</div>
        <div className="labelBrutto">Brutto</div>
        <div className="labelQuantity">Quantity</div>
      </div>
    </div>
  );
}

export default App;
