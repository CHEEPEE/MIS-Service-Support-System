<?php
include '../functions/db.php';

 $designation_name = $_POST["designation_name"];
 $query = "INSERT INTO designations(designation_name) VALUES('$designation_name')";
 if(mysqli_query($connect, $query))
 {
  echo 'success';
}else {
  echo "Error: " . $query . "<br>" . $connect->error;
}
?>
