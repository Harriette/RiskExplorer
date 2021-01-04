<?php

// If mandatory fields are set proceed
require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

$sql = "INSERT INTO companies (name) VALUES (:na);";
$stmt = $conn->prepare($sql);
$stmt->execute(array(':na' => $_POST['name']));
$_SESSION['success'] = 'Company Added';

$newRecord = array(
  'company_ID' => $conn->lastInsertId(),
  'name'       => $_POST['name']
);

echo json_encode($newRecord);
