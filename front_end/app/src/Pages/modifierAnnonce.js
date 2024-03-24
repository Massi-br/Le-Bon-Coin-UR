import React from "react";
import { Link } from "react-router-dom";

const ModifierAnnonce = () => {
  const annonce = {
    id: 1,
    type: "Meuble",
    longueur: 2,
    largeur: 1.5,
    hauteur: 1,
    description: "Table en bois",
    demontable: true,
    date_annonce: "2024-03-07",
    lieu_stockage: "Entrepôt A",
    condition_deplacement: "Fragile",
    etat: "Neuf",
  };
  // Tester avec l'annonce d'id 2
  // const annonceIdToDisplay = 2;

  // const { id } = useParams();
  // const [annonce, setAnnonce] = useState(null);

  /*useEffect(() => {
    const fetchAnnonce = async () => {
      const response = await fetch(`/api/annonces/${id}`);
      const data = await response.json();
      setAnnonce(data);

      fetchAnnonce();
  }, [id]);
    };*/
  // useEffect(() => {
  //   const annonceToDisplay = exannonce.find(
  //     (annonce) => annonce.id === annonceIdToDisplay
  //   );
  //   setAnnonce(annonceToDisplay);
  // }, []);

  if (!annonce) {
    return <div>Chargement en cours...</div>;
  }

  /*return (
    <div>
      <h1>Modifier l'annonce</h1>
      <div>
        <p>Type : {annonce.type}</p>
        <p>Description : {annonce.description}</p>
        <p>Dimensions : {annonce.longueur}m x {annonce.largeur}m x {annonce.hauteur}m</p>
        <p>Lieu de stockage : {annonce.lieu_stockage}</p>
        <p>Condition de déplacement : {annonce.condition_deplacement}</p>
        <p>État : {annonce.etat}</p>
        <p>Date de l'annonce : {annonce.date_annonce}</p>
        <p>Démontable : {annonce.demontable ? 'Oui' : 'Non'}</p>
        <button >Enregistrer les modifications</button>
      </div>
    </div>
  );*/

  return (
    <div>
      <h1>Modifier l'annonce</h1>
      <div>
        <p>
          <label>Type :</label>
          <input type="text" defaultValue={annonce.type} />
        </p>
        <p>
          <label>Description :</label>
          <input type="text" defaultValue={annonce.description} />
        </p>
        <p>
          <label>Dimensions :</label>
          <input type="text" defaultValue={annonce.longueur} /> m x
          <input type="text" defaultValue={annonce.largeur} /> m x
          <input type="text" defaultValue={annonce.hauteur} /> m
        </p>
        <p>
          <label>Lieu de stockage :</label>
          <input type="text" defaultValue={annonce.lieu_stockage} />
        </p>
        <p>
          <label>Condition de déplacement :</label>
          <input type="text" defaultValue={annonce.condition_deplacement} />
        </p>
        <p>
          <label>État :</label>
          <input type="text" defaultValue={annonce.etat} />
        </p>
        <p>
          <label>Date de l'annonce :</label>
          <input type="text" defaultValue={annonce.date_annonce} />
        </p>
        <p>
          <label>Démontable :</label>
          <input
            type="text"
            defaultValue={annonce.demontable ? "Oui" : "Non"}
          />
        </p>
        <Link to="/">
          <button>Enregistrer les modifications</button>
        </Link>
      </div>
    </div>
  );
};
export default ModifierAnnonce;
