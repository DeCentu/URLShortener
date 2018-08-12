<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AddUrls
 *
 * @ORM\Table(name="add_urls")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\AddUrlsRepository")
 */
class AddUrls
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="general_url", type="string", length=255)
     */
    public $generalUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="short_url", type="string", length=255)
     */
    public $shortUrl;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set generalUrl
     *
     * @param string $generalUrl
     *
     * @return AddUrls
     */
    public function setGeneralUrl($generalUrl)
    {
        $this->generalUrl = $generalUrl;

        return $this;
    }

    /**
     * Get generalUrl
     *
     * @return string
     */
    public function getGeneralUrl()
    {
        return $this->generalUrl;
    }

    /**
     * Set shortUrl
     *
     * @param string $shortUrl
     *
     * @return AddUrls
     */
    public function setShortUrl($shortUrl)
    {
        $this->shortUrl = $shortUrl;

        return $this;
    }

    /**
     * Get shortUrl
     *
     * @return string
     */
    public function getShortUrl()
    {
        return $this->shortUrl;
    }
}

