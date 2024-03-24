<?php

namespace App\Controller\API;

use App\Repository\AnnoncesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class Annonces extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/API/Annonces', name : 'Annonces', methods : ['GET'])]
    
    public function show(AnnoncesRepository $annoncesRepository): JsonResponse
    {
        /*// Récupérer tous les éléments de la base de données à l'aide du repository
        $annonces = $annoncesRepository->findAll();

        // Transformer les données en un tableau associatif pour la réponse JSON
        $annoncesArray = [];
        foreach ($annonces as $annonce) {
            $annoncesArray[] = [
                'id' => $annonce->getId(),
                'type' => $annonce->getType(),
                'longueur' => $annonce->getLongueur(),
                'largeur' => $annonce->getLargeur(),
                'hauteur' => $annonce->getHauteur(),
                'description' => $annonce->getDescription(),
                'demontable' => $annonce->isDemontable(),
                'date_annonce' => $annonce->getDateAnnonce()->format('Y-m-d H:i:s'),
                'lieu_stockage' => $annonce->getLieuStockage(),
                'condition_deplacement' => $annonce->getConditionDeplacement(),
                'etat' => $annonce->getEtat(),
                // Tu peux ajouter d'autres propriétés si nécessaire
            ];
        }

        // Créer une réponse JSON avec les éléments récupérés
        return new JsonResponse($annoncesArray);*/
        return new JsonResponse();
    }
}

