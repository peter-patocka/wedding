<?php

$request=$_SERVER['REQUEST_METHOD'];
$code = parseInput(get_invite_code());

switch ( $request) {
    case 'GET':
   		acceptInvitationJson($code);
   	    break;
    case 'PUT':
        $data=json_decode(file_get_contents('php://input'),true);
        updateInvitation($code, $data);
        break;
    case 'PATCH':
        getGuestsJson($code);
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

function acceptInvitationJson($code){
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
function updateInvitation($code, $guests){
    $group_id = getGroupId($code);
    if($group_id < 0 || !$guests) {
        header("HTTP/1.0 404 Not Found");
        echo '{"result": "error", "status": "code not found"}';
        return;
    }

    $rows_affected = 0;
    foreach ($guests as $guest) {
        $rows_affected += updateGuest($guest);
    }

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
        "WHERE visited = 0 AND deleted = 0 AND group_id = ".$group_id;

    mysqli_query($conn, $sql);
    return mysqli_affected_rows($conn);
}
function updateGuest($guest) {
    global $conn;

    $id = parseInput($guest["id"]);
    $invitation_code = parseInput($guest["invitation_code"]);
    $message = parseInput($guest["message"]);
    $invitation_accepted = parseInput($guest["invitation_accepted"]);

    if(!$id || !$invitation_code) {
        return 0;
    }

    $sql = "UPDATE `wedding-table` ".
        "SET invitation_accepted = '{$invitation_accepted}', 
             message = '{$message}' ".
        "WHERE id = '{$id}' AND invitation_code = '{$invitation_code}'";

    mysqli_query($conn, $sql);
    return mysqli_affected_rows($conn);
}

function getGroupId($code) {
    global $conn;

    $sql = "SELECT group_id FROM `wedding-table` b WHERE UPPER(invitation_code) = UPPER('".parseInput($code)."')";

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

    $sql = "SELECT distinct a.* FROM `wedding-table` a WHERE a.deleted = 0 AND a.group_id = ".$group_id;

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
