<?php

include "configuration.php";

header('Access-Control-Allow-Origin: *');
 
// include "authenticate.php"; // CORS Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'

header('content-type: application/json');

$fn = $_GET['fn'];

switch($_GET['fn']) {
    case 'learnhunter':
        include "components/learnhunter.php";
        break;
   case 'wedding-tables':
           include "components/wedding-tables.php";
           break;
    default:
        echo '{"status":"up"}';
}
?>
