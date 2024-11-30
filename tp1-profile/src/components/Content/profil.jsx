import React,{Component} from "react";


function Card({ nom,id, group}) {
  return (
    <div className="card">
      <h3 className="h3">les information personel</h3>
      <p>{nom}</p>
      <p>{id}</p>
      <p>{group}</p>
      
    </div>
  );
}
function CardD({date_naissance,lieu_naissance,Nationalite,Adresse, option}) {
  return (
    <div className="card">
      <h3 className="h3">Les informations générales</h3>
      <p>{date_naissance}</p>
      <p>{lieu_naissance}</p>
      <p>{Nationalite}</p>
      <p>{Adresse}</p>
      <p>{option}</p>
      
    </div>
  );
}
function CardT({description}) {
  return (
    <div className="card">
      <h3 className="h3">Autre informations </h3>
      <p>{description}</p>
     
      
    </div>
  );
}

const Profile = () => {
  return (
    <div className="content">
      <br />
      <br />
      <div className="cards-container">
        <Card

          nom=" Nom et Prenom: Firdaous Berrouho"
          id="ID : 20041707234"
          group="Groupe : DEVOFS202"
        />

<CardD
date_naissance="Date de naissance : 14/07/2004"
lieu_naissance="lieu de naissance : Tanger"
Adresse="Adresse : Aouama tanger"
 option="Option : Full stack"
 Nationalite="Nationalité : Marocaine"
/>
<CardT
description="Ces informations sont sensibles et doivent être protégées. Une mauvaise utilisation de ces données peut entraîner des fraudes, des vols d'identité ou des atteintes à la vie privée"

/>


        
        
        
      </div>
      <br />
      <br />
    </div>
  );
};

export default Profile;