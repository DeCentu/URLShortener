<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

use AppBundle\Entity\AddUrls;
use Doctrine\ORM\EntityManagerInterface;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig');
    }

    /**
    *@Route("/{slug}", name="reddirects")
    */
    public function redirectAction($slug) 
    {
        $product = $this->getDoctrine()
        ->getRepository(AddUrls::class)
        ->findOneByshortUrl($slug);

        if( $product != null) {
            $url = $product->generalUrl;

            if( $url != null) {
                return $this->redirect($url);
            }
        } else {
            return $this->redirectToRoute('homepage');            
        }
    }
}
