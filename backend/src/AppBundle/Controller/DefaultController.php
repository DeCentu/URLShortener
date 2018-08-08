<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage", methods={"POST"})
     */


    public function indexAction()
    {
       return new JsonResponse(['general_url' => 'http://example.com/', 'short_url' => 'http://test.short/a']);
    }
}
