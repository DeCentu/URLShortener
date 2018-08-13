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
    public function formAction(Request $request)
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/redirects-list", name="redirects-list")
     */
    public function redirectsListAction(Request $request)
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/getList", name="getList")
     */
    public function getListAction(Request $request)
    {       
        $urls = $this->getDoctrine()->getRepository(AddUrls::class)->findAll();

        return new JsonResponse(['list' => $urls]);
    }

    /**
     * @Route("/generate", name="generate")
     */
    public function generateUrlAction(Request $request)
    {       
        $url = md5(uniqid(rand(),1));
        return new JsonResponse(['url' => $url]);
    }

    /**
    *@Route("/{slug}", name="reddirects")
    */
    public function redirectAction($slug) 
    {
        $entityManager = $this->getDoctrine()->getManager();

        $product = $this->getDoctrine()
        ->getRepository(AddUrls::class)
        ->findOneByshortUrl($slug);

        $check = false;


        if( $product != null) {
            $url = $product->generalUrl;

            if( $url != null) {
                $usage = $product->getTotalUsage();
                $product->setTotalUsage($usage + 1);
                $entityManager->flush();

                return $this->redirect($url);
            }
        } else {
            return $this->redirectToRoute('homepage');            
        }
    }
}
