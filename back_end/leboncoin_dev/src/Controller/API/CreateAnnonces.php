<?php

namespace App\Controller\API;

use App\Entity\Annonces;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class CreateAnnonces extends AbstractController
{

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/API/CreateAnnonces', 'home.index', methods : ['GET'])]
    public function createAnnonce(EntityManagerInterface $entityManager): Response
    {   
        /*for($i=0; $i < 15; $i++){
            $annonce = new Annonces();
            $annonce->setType("Bureau");
            $annonce->setLongueur(1.0);
            $annonce->setLargeur(0.50);
            $annonce->setHauteur(1.0);
            $annonce->setDescription("Ceci est un très beau bureau qui a peu servi, j'aimerais m'en débarasser, contacter moi au 07 80 68 34 56 pour toutes informations");
            $annonce->setDemontable(false);
            $annonce->setDateAnnonce(new DateTimeImmutable());
            $annonce->setLieuStockage("Garage");
            $annonce->setConditionDeplacement("1 personne avec une voiture");
            $annonce->setEtat("Presque neuf");
            $entityManager->persist($annonce);
        }

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $entityManager->persist($annonce);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();*/

        return new Response('Les annonces ont été créées avec succès !');
    }

}