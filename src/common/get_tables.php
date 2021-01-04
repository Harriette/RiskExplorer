<?php

require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

switch ($_GET['table']) {
  case 'companies':
    $sql = "SELECT * FROM companies";
    break;
  case 'departments':
    $sql = "SELECT * FROM departments";
    break;
  case 'processes':
    $sql = "SELECT * FROM processes";
    break;
}

$stmt = $conn->prepare($sql);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results, JSON_PRETTY_PRINT);
