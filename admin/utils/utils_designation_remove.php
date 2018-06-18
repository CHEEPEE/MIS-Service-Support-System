<?php
include '../functions/db.php';

 $designation_id = $_POST["designation_id"];
 $query = "delete from designations where designation_id = $designation_id";
 if(mysqli_query($connect, $query))
 {
  echo 'success';
}else {
  echo "Error: " . $query . "<br>" . $connect->error;
}
?>
