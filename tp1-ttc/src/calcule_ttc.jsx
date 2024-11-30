import React from 'react';
import './calcule.css';
import PHT from './pht';
import TVA from './TVA';
import Buttons from './btn';
import Resultat from './Res';

function CalculTTC() {

    
 

  return (
    <div className='calculateur'>
      <h1>Calcul de PTTC</h1>
      <PHT/>
      <TVA />
      <Buttons/>
      <Resultat/>
     
    </div>
  );
}

export default CalculTTC;