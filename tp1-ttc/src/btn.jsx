import React from "react";
function Buttons({ onCalcul, onInitialiser }) {
    return (
      <div>
        <button id="calcule" onClick={onCalcul} >Calculer</button>
        <button id="initialiser" onClick={onInitialiser}>Initialiser</button>
      </div>
    );
  }
  
  export default Buttons;