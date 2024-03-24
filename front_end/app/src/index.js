import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";
import ListeAnnonces from "./components/mesannonces";
import Addannonce from "./components/addannonce";
import ProfilUtilisateur from "./components/ProfilUtilisateur.js";
import Login from "./Pages/login.jsx";
import Signup from "./Pages/signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/connexion",
    element: <Login />,
  },
  {
    path: "/connexion/signup",
    element: <Signup />,
  },
  {
    path: "/Profil/addAnnonce",
    element: <Addannonce />,
  },
  {
    path: "/MesAnnonces",
    element: <ListeAnnonces />,
  },
  {
    path: "/Profil/MesAnnonces",
    element: <ListeAnnonces />,
  },
  {
    path: "/Profil",
    element: <ProfilUtilisateur />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
