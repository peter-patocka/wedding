<?php

$auth_user = "5trzalka";

if (!isset($_SERVER['PHP_AUTH_USER'])
    || $_SERVER['PHP_AUTH_USER'] != $auth_user
   ) {
    header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    exit;
}

?>
