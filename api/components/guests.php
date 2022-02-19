<?php

$request=$_SERVER['REQUEST_METHOD'];

switch ( $request) {
    case 'PUT':
        $data=json_decode(file_get_contents('php://input'),true);
        updateGuests($data);
        break;

    default:
        echo '{"name": "data not found"}';
        break;
}

function updateGuests($data)
{
    global $conn;

    $rows_affected = 0;

    foreach($data as $guest) {
        $id = parseInput($guest["id"]);
        $code = parseInput($guest["code"]);
        $invitation_accepted = parseInput($guest["invitation_accepted"]);

        $sql = "UPDATE `wedding-table` SET
                     invitation_accepted = '{$invitation_accepted}'
                WHERE id = '{$id}' AND code = '{$code}'";

        mysqli_query($conn, $sql);
        $rows_affected += mysqli_affected_rows($conn);
    }

    echo '{"result": "success", "num_rows_affected": "'.$rows_affected.'"}';
}
?>
