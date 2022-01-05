<?php

$server = getenv("MYSQL_SERVER") ?? "localhost";
$username = getenv("MYSQL_USER") ?? "username";
$password = getenv("MYSQL_PASSWORD") ?? "password";
$dbname = getenv("MYSQL_DATABASE") ?? "dbname";

$conn = new mysqli($server, $username, $password, $dbname);

?>