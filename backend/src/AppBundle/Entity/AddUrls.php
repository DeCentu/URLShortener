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
     * @ORM\Column(name="generalUrl", type="text")
     */
    public $generalUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="shortUrl", type="text")
     */
    public $shortUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="date", type="text")
     */
    public $date;

    /**
     * @var int
     *
     * @ORM\Column(name="totalUsage", type="integer")
     */
    public $totalUsage;


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

    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return AddUrls
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set totalUsage
     *
     * @param integer $totalUsage
     *
     * @return AddUrls
     */
    public function setTotalUsage($totalUsage)
    {
        $this->totalUsage = $totalUsage;

        return $this;
    }

    /**
     * Get totalUsage
     *
     * @return int
     */
    public function getTotalUsage()
    {
        return $this->totalUsage;
    }
}

