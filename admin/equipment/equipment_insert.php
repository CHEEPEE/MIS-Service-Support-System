<?php
$connect = mysqli_connect("localhost", "root", "", "testing");
if ($connect->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 $first_name = mysqli_real_escape_string($connect, $_POST["equipment_id"]);
 $last_name = mysqli_real_escape_string($connect, $_POST["equipment_name"]);
 $query = "INSERT INTO table_user(first_name, last_name) VALUES('$first_name', '$last_name')";
 if(mysqli_query($connect, $query))
 {
  echo 'Data Inserted';
}else {
  echo "Error: " . $query . "<br>" . $connect->error;
}
?>
