<?php

   $request=$_SERVER['REQUEST_METHOD'];

   switch ( $request) {
   	case 'GET':
   		getmethod();
   	break;

   	default:
   		echo '{"name": "data not found"}';
   		break;
   }

//data read part are here
function getmethod(){
  include "db.php";
  $sql = "SELECT * FROM `wedding-table` WHERE deleted = 0";

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
