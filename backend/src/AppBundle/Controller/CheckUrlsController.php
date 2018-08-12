<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouteCollection;

use AppBundle\Entity\AddUrls;
use Doctrine\ORM\EntityManagerInterface;

class CheckUrlsController extends Controller
{

    /**
     * @Route("/checkshorturl", name="checkshorturl")
     */
    public function checkshorturlAction(Request $request)
    {
            $data = $request->request->get('checked_url');
        if ($data) {

          $router = $this->container->get('router');
          $collection = $router->getRouteCollection();
          $allRoutes = $collection->all();  
          $answer = false;


          foreach ($allRoutes as $route => $params)
          {
              $defaults = $params->getDefaults();

              if (isset($defaults['_controller']))
              {
                if ($route != $data) 
                {
                  $answer = true;
                }

                else

                {
                  $answer = false;
                  break;
                }

              }
          }
          return new JsonResponse(['status' => $answer]);

        } else {                
            return $this->redirectToRoute('homepage');
        }
    }

    /**
     * @Route("/checkgeneralurl", name="checkgeneralurl")
     */
    public function checkAction(Request $request)
    {  
         
            $data = $request->request->get('checked_url');
        if ($data) {
            $site_headers = @get_headers($data);

            $status_code = [];

            if ( $site_headers ) 
            { 
              preg_match('/\d{3}/', $site_headers[0], $status_code);

              $status_code = intval($status_code[0]);


              if ( $status_code >= 200 && $status_code < 400 ) {
                  $status_code = true;
              } else {
                  $status_code = false;
              }
            } 
            else
            {
              $status_code = false;
            }
            return new JsonResponse(['status' => $status_code]);
        } else {                
            return $this->redirectToRoute('homepage');
        }
    }

    /**
     * @Route("/addurls", name="addurls")
     */
    public function addurlsAction(Request $request)
    {  
         
        $general_url = $request->request->get('general_url');
        $short_url = $request->request->get('short_url');

        if ($general_url && $short_url) {
            $entityManager = $this->getDoctrine()->getManager();

            $addUrls = new AddUrls();
            $addUrls->setGeneralUrl($general_url);
            $addUrls->setShortUrl($short_url);

            $entityManager->persist($addUrls);
            $entityManager->flush();

            return new JsonResponse(['status' => true]);
        } else {                
            return $this->redirectToRoute('homepage');
        }
    }

}
