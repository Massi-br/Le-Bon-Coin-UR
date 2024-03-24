import React from "react";
import "./css/mesAnnonces.css";
import Button from "@mui/material/Button";
import { useLocation, Link } from "react-router-dom";

function ListeAnnonces() {
  const location = useLocation();
  const annonces = Array.isArray(location.state?.annonces) ? location.state.annonces : [];

  return (
    <div>
      <h1>Mes Annonces</h1>
      {annonces.map((annonce, index) => (
        <div key={index} className="annoncesContainer">
          <h3>Type : {annonce.furnitureType}</h3>
          <p>Dimensions : {annonce.length} x {annonce.width} x {annonce.height}</p>
          
          <Link to="/">
            <Button variant="contained" className="annonceBtn">
              Modifier
            </Button>
          </Link>
          <Button variant="contained" className="annonceBtn" onClick={() => null}>
            Supprimer
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ListeAnnonces;
