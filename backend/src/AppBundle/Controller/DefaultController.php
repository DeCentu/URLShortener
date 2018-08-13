<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

use AppBundle\Entity\AddUrls;
use Doctrine\ORM\EntityManagerInterface;

class DefaultController extends Controller
{

    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $urls = $this->getDoctrine()->getRepository(AddUrls::class)->findAll();
        if ( $urls ) {
            foreach ($urls as $url) {
                $date = $url->date;
                $now = date('d-m-Y');
                $date = strtotime($date);
                $now = strtotime($now);

                if( intval($date) + 1296000 <= intval($now)){ // 1296000 === 15 days
                    $entityManager->remove($url);   
                    $entityManager->flush();
                }
            }
        }

        return $this->render('default/index.html.twig');
    }
    
    /**
     * @Route("/create", name="create")
     */
    public function createAction(Request $request)
    {
        return $this->render('default/index.html.twig');
    }
}
