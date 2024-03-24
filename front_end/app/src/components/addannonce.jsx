import React ,{useState} from "react";
import "./css/addAnnonce.css";

import Button from "@mui/material/Button";
import { useNavigate  } from "react-router-dom";

function Addannonce() {
    const [annonce, setAnnonce] = useState({
        furnitureType: "",
        length: "",
        width: "",
        height: "",
        description: "",
        dismantlable: "",
        announcementDate: "",
        storageLocation: "",
        movingCondition: "",
        condition: "",
        photos: [],
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnnonce({ ...annonce, [name]: value });
      };

      const navigate = useNavigate();

      const handleSubmit = (e)=>{
        e.preventDefault();
        if (annonce.furnitureType !== "") {
          navigate("/MesAnnonces", { state: { annonce } });
        } else {
          alert("Veuillez remplir tous les champs de l'annonce.");
        }
      }

  return (
    <div className="container_annonce">
      <h1>Ajout annonce</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="furnitureType">Type de meuble :</label>
        <input type="text" 
        id="furnitureType" 
        name="furnitureType" 
        value={annonce.furnitureType}
        onChange={handleInputChange} 
        required />

        <label htmlFor="dimensions">Dimensions :</label>
        <div>
            <input
            type="number"
            id="length"
            name="length"
            placeholder="Longueur (cm)"
            value={annonce.length}
            onChange={handleInputChange}
            
            />
            <input
            type="number"
            id="width"
            name="width"
            placeholder="Largeur (cm)"
            value={annonce.width}
            onChange={handleInputChange}
            
            />
            <input
            type="number"
            id="height"
            name="height"
            placeholder="Hauteur (cm)"
            value={annonce.height}
            onChange={handleInputChange}
            
            />
        </div>

         <label htmlFor="description"> Description :</label>
        <textarea id="description" name="description" rows="4"   
        value={annonce.description}
        onChange={handleInputChange} 
         >
         </textarea>

        <label htmlFor="dismantlable">Démontable :</label>
        <select id="dismantlable" name="dismantlable" 
        value={annonce.dismantlable} onChange={handleInputChange}>
          <option value="fully">Entièrement</option>
          <option value="partially">En partie</option>
          <option value="not">Non démontable</option>
        </select>

        <label htmlFor="announcementDate">Date de l'annonce :</label>
        <input type="date" id="announcementDate" name="announcementDate" 
        value={annonce.announcementDate} onChange={handleInputChange} />

        <label htmlFor="storageLocation">Lieu de stockage :</label>
        <input type="text" id="storageLocation" name="storageLocation"  
        value={annonce.storageLocation}   onChange={handleInputChange}  />

        <label htmlFor="movingCondition">Condition de déplacement :</label>
        <input type="text" id="movingCondition" name="movingCondition" 
        value={annonce.movingCondition} onChange={handleInputChange}  />

        <label htmlFor="condition">État :</label>
        <select id="condition" name="condition" value={annonce.condition} onChange={handleInputChange}>
          <option value="likeNew">Comme neuf</option>
          <option value="used">Usé</option>
          <option value="damaged">Abîmé</option>
        </select>

        <label htmlFor="photos">Photos (upload de fichier) :</label>
        <input type="file" id="photos" name="photos" accept="image/*" multiple  onChange={handleInputChange} /> 

        <Button  variant="contained" className="ordersButton" type="submit"> Soumettre l'annonce </Button>
      </form>
    </div>
  );
}

export default Addannonce;




