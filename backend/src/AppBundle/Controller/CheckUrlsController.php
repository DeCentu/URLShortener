<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CheckUrlsController extends Controller
{
    /**
     * @Route("/checkgeneralurl", name="checkgeneralurl")
     */
    public function checkgeneralurlAction(Request $request)
    {
        $data = $request->request->get('checked_url');
        $site_headers = get_headers($data);

        preg_match('/\d{3}/', $site_headers[0], $status_code);

        $status_code = intval($status_code[0]);

        if ( $status_code >= 200 && $status_code < 400 ) {
            $status_code = true;
        } else {
            $status_code = false;
        }
        return new JsonResponse(['status' => $status_code]);
    }

    /**
     * @Route("/checkshorturl", name="checkshorturl")
     */
    public function checkshorturlAction(Request $request)
    {
        $data = $request->request->get('checked_url');


        $data = sprintf(
          "%s://%s%s",
          isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
          $_SERVER['SERVER_NAME'],
          $data
        );

        $site_headers = get_headers($data);

        preg_match('/\d{3}/', $site_headers[0], $status_code);

        $status_code = intval($status_code[0]);

        if ( $status_code >= 400 ) {
            $status_code = true;
        } else {
            $status_code = false;
        }
        return new JsonResponse(['status' => $status_code]);
    }
    
}
