<?php
$config = new \Doctrine\DBAL\Configuration();

$connectionParams = array(
    'dbname' => 'urlshortener',
    'user' => 'mysql',
    'password' => '',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
);
$conn = \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);


?>