<?php
include '../functions/db.php';

 $designation_id = $_POST["designation_id"];
 $designation_name = $_POST['designation_name'];
 $query = "update designations set designation_name = '$designation_name' where designation_id = $designation_id";
 if(mysqli_query($connect, $query))
 {
  echo 'success';
}else {
  echo "Error: " . $query . "<br>" . $connect->error;
}
?>
