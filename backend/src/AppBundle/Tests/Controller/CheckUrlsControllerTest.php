<?php

namespace AppBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CheckUrlsControllerTest extends WebTestCase
{
    public function testCheckgeneralurl()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/checkgeneralurl');
    }

    public function testCheckshorturl()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/checkshorturl');
    }

}
