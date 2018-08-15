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

class ListUrlController extends Controller
{

    /**
     * @Security("has_role('ROLE_USER')")
     * @Route("/list", name="list")
     */
    public function redirectsListAction()
    {
        return $this->render('default/index.html.twig');
    }
    
    /**
     * @Route("/getlist", name="getList")
     */
    public function getListAction(Request $request)
    {       
        $urls = $this->getDoctrine()->getRepository(AddUrls::class)->findAll();

        return new JsonResponse(['list' => $urls]);
    }
}
