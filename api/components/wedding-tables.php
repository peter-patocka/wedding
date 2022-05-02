<?php

$request=$_SERVER['REQUEST_METHOD'];

switch ( $request) {
    case 'GET':
        fetchGuests();
        break;

    default:
        echo '{"name": "data not found"}';
        break;
}

function fetchGuests() {
    global $conn;

    $sql = "SELECT * FROM `wedding-table` WHERE deleted = 0 AND invitation_accepted = 1";

    if ($result = mysqli_query($conn, $sql)) {
       $rows = array();
       $i = 0;
       while ($obj = mysqli_fetch_object($result)) {
          $rows[$i++] = $obj;
       }

       echo json_encode($rows);
    }  else{
      echo '{"result": "no data found"}';
    }
}
?>
