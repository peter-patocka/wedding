<?php

require_once ('MysqliDb.php');

$server = "mysql";
$username = "username";
$password = "password";
$dbname = "dbname";

$conn = mysqli_connect($server, $username, $password, $dbname);
$conn->query("SET NAMES 'utf8'");

?>
