<?php

require_once ('MysqliDb.php');

$conn = mysqli_connect(MYSQL_SERVER, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DBNAME);
mysqli_query($conn, "SET NAMES 'utf8'");

?>