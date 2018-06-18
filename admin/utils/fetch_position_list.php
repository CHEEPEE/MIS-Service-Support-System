<?php
include '../functions/db.php';
$sql = "select * from positions";
$result = $connect->query($sql);
$arrayData = array();
if ($result->num_rows >0) {
  // code...
  while ($row = $result->fetch_assoc()) {
    // code...
    $arrayData[]=$row;
  }
}else {
  echo "resul 0";
}
echo json_encode($arrayData);
?>
