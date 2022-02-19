<?php

function parseInput($data) {
    global $conn;
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if($conn) {
        $data = mysqli_real_escape_string($conn, $data);
    }
    return $data;
}

?>
