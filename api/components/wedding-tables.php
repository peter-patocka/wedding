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
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
       $rows=array();
       while ($r = mysqli_fetch_assoc($result)) {

          $rows["result"][] = $r;
       }

       echo json_encode($rows);
  }  else{
      echo '{"result": "no data found"}';
    }
}
?>
