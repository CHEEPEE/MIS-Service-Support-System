<?php
include '../functions/db.php';

 $position_id = $_POST["position_id"];
 $query = "delete from positions where position_id = $position_id";
 if(mysqli_query($connect, $query))
 {
  echo 'success';
}else {
  echo "Error: " . $query . "<br>" . $connect->error;
}
?>
