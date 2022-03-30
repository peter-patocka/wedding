<?php

$request=$_SERVER['REQUEST_METHOD'];
$code = parseInput(get_invite_code());

switch ( $request) {
   	case 'POST':
    case 'GET':
   		postAcceptInvitationJson($code);
    break;

   	default:
   		echo '{"name": "data not found"}';
   	break;
}

function get_invite_code() {
    $parts = explode("/", $_GET['fn']);
    $folders = $parts > 0 ? array_slice($parts, 0) : [];
    return isset($folders[1]) ? $folders[1] : '';// get code from  "inv/{code}"
}

function postAcceptInvitationJson($code){
    $group_id = getGroupId($code);
    if($group_id < 0) {
        header("HTTP/1.0 404 Not Found");
        echo '{"result": "error", "status": "code not found"}';
        return;
    }

    $rows_affected = updateGroupInvitation($group_id);

    $guests = loadGuests($group_id);

    if ($guests) {
       echo '{"result": "success", "num_rows_affected": "'.$rows_affected.'", "rows_affected": '.json_encode($guests).'}';
    }  else {
       echo '{"result": "error", "status": "mysql query error" ,"num_rows_affected": "'.$rows_affected.'"}';
    }
}
function getGuestsJson($code){
    $group_id = getGroupId($code);
    if($group_id < 0) {
        echo '{"result": "error", "status": "code not found"}';
        return;
    }

    $guests = loadGuests($group_id);
    if ($guests) {
        echo '{"result": "success", "data": '.json_encode($guests).'}';
    }  else {
        echo '{"result": "error", "status": "guests not found"}';
    }
}

function updateGroupInvitation($group_id) {
    global $conn;

    $sql = "UPDATE `wedding-table` ".
        "SET invitation_accepted = 1, visited = 1 ".
        "WHERE visited = 0 AND group_id = ".$group_id;

    mysqli_query($conn, $sql);
    return mysqli_affected_rows($conn);
}

function getGroupId($code) {
    global $conn;

    $sql = "SELECT group_id FROM `wedding-table` b WHERE UPPER(invitation_code) = UPPER('".$code."')";

    if (!($result = mysqli_query($conn, $sql))) {
        return -1;
    }

    $guest = mysqli_fetch_object($result);
    if(!$guest) {
        return -1;
    }

    return $guest->group_id;
}

function loadGuests($group_id){
    global $conn;

    $sql = "SELECT distinct a.* FROM `wedding-table` a WHERE a.group_id = ".$group_id;

    $rows = array();
    if ($result = mysqli_query($conn, $sql)) {
        $i = 0;
        while($obj = mysqli_fetch_object($result)) {
            $rows[$i++] = $obj;
        }

        return $rows;
    }  else {
        return $rows;
    }
}
?>
