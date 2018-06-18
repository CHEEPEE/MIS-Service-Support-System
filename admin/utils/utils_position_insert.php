<?php
include '../functions/db.php';

 $pos_name = $_POST["pos_name"];
 $query = "INSERT INTO positions(position_name) VALUES('$pos_name')";
 if(mysqli_query($connect, $query))
 {
  echo 'success';
}else {
  echo "Error: " . $query . "<br>" . $connect->error;
}
?>
