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

class RedirectsController extends Controller
{

    /**
    * @Route("/{slug}", name="reddirects")
    */
    public function redirectAction($slug) 
    {
        $entityManager = $this->getDoctrine()->getManager();

        $product = $this->getDoctrine()
        ->getRepository(AddUrls::class)
        ->findOneByshortUrl($slug);

          $router = $this->container->get('router');
          $collection = $router->getRouteCollection();
          $allRoutes = $collection->all();  
          $check = 0;

          foreach ($allRoutes as $route => $params)
          {
              $defaults = $params->getDefaults();

              if (isset($defaults['_controller']))
              {
                if ($route != $slug) 
                {
                  $check = true;
                }

                else

                {
                  $check = false;
                  break;
                }

              }
          }


        if( $product != null && $check) {
            $url = $product->generalUrl;

            if( $url != null) {
                $usage = $product->getTotalUsage();
                $product->setTotalUsage($usage + 1);
                $entityManager->flush();

                return $this->redirect($url);
            }
        } 
        else {         
          return $this->redirectToRoute('homepage');
        }
    }
}
