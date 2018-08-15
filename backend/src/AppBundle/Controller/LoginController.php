<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use AppBundle\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Doctrine\ORM\EntityRepository;

class LoginController extends Controller
{
    /**
     * @Route("/check_login", name="check_login")
     */
    public function loginAction(AuthenticationUtils $authenticationUtils, Request $request)
    {

        $username = $request->request->get('_username');
        $password = $request->request->get('_password');

        $check_username = false;
        $check_password = false;

        $check_user = false;

          $product = $this->getDoctrine()
          ->getRepository(User::class)
          ->findOneByusername($username);

          if ( $product != null) {
          	$check_username = true;

          	if ( password_verify($password, $product->password) ) {
          		$check_password = true;
          	}
          } 

          if($check_username && $check_password) {
          	$check_user = true;
          }

	    return new JsonResponse(['check_username' => $check_username, 'check_password' => $check_password, 'check_user' => $check_user]);
    	
    }

    /**
     * @Route("/login", name="login")
     */
    public function loginCheckAction()
    {
        return $this->render('default/index.html.twig');    	
    }

}
