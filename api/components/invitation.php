<?php

   $request=$_SERVER['REQUEST_METHOD'];

   switch ( $request) {
   	case 'POST':
   		postmethod();
   	break;

   	default:
   		echo '{"name": "data not found"}';
   		break;
   }

function get_invite_code() {
    $parts = explode("/", $_GET['fn']);
    $folders = $parts > 0 ? array_slice($parts, 0) : [];
    return isset($folders[1]) ? $folders[1] : '';
}

//data read part are here
function postmethod(){
    $code = mysqli_real_escape_string($conn, get_invite_code());
    $sql = "UPDATE `wedding-table` a ".
           "INNER JOIN `wedding-table` b ON a.group_id =b.group_id ".
           "SET a.invitation_accepted = 1 ".
           "WHERE UPPER(a.invitation_code) = UPPER('".$code."') OR UPPER(b.invitation_code) = UPPER('".$code."')";

    mysqli_query($conn, $sql);
    $rows_affected = mysqli_affected_rows($conn);

    $sql = "SELECT distinct a.* FROM `wedding-table` a ".
               "INNER JOIN `wedding-table` b ON a.group_id = b.group_id ".
               "WHERE UPPER(a.invitation_code) = UPPER('".$code."') OR UPPER(b.invitation_code) = UPPER('".$code."')";

    if ($result = mysqli_query($conn, $sql)) {
       $rows = array();

       $num_rows = mysqli_num_rows($result);

       if($num_rows == 0) {
           echo '{"result": "error", "status": "invalid data" ,"num_rows_affected": "'.$rows_affected.'"}';
           return;
       }

       $rows = array();
       $i = 0;
       while($obj = mysqli_fetch_object($result)) {
          $rows[$i++] = $obj;
       }

       echo '{"result": "updated", "num_rows_affected": "'.$rows_affected.'", "rows_affected": '.json_encode($rows).'}';
    }  else {
       echo '{"result": "error", "status": "mysql query error" ,"num_rows_affected": "'.$rows_affected.'"}';
    }
}
?>
