<?php
include '../functions/db.php';

 $position_id = $_POST["position_id"];
 $position_name = $_POST['position_name'];
 $query = "update positions set position_name = '$position_name' where position_id = $position_id";
 if(mysqli_query($connect, $query))
 {
  echo 'success';
}else {
  echo "Error: " . $query . "<br>" . $connect->error;
}
?>
