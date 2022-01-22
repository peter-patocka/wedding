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
  $sql = "SELECT * FROM `wedding-table`";

  if ($result = mysqli_query($conn, $sql)) {
       $rows = array();
       $i = 0;
       while ($obj = mysqli_fetch_object($result)) {
          $rows["result"][$i++] = $obj;
       }

       echo json_encode($rows);
  }  else{
      echo '{"result": "no data found"}';
    }
}
?>
