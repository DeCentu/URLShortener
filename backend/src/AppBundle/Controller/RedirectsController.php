<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class RedirectsController extends Controller
{
    /**
     * @Route("/get")
     */
    public function getAction()
    {
        return $this->render('AppBundle:Redirects:get.html.php', array(
            // ...
        ));
    }

}
