<?php

require_once "include/configuration.php";
require_once "include/functions.php";
require_once "include/db.php";

header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");

$fn = $_GET['fn'];

switch(strtok($_GET['fn'], '/')) {
    case 'learnhunter':
        include "components/learnhunter.php";
        break;
   case 'wedding-tables':
           include "components/wedding-tables.php";
           break;
    case 'invitation':
        include "components/invitation.php";
        break;
    default:
        echo '{"status":"up"}';
}
?>
