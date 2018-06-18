<?php
$connect = mysqli_connect("localhost", "root", "", "mis_service_support_system");
if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}

?>
