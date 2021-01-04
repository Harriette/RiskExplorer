<?php


// If mandatory fields are set proceed
require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

$message = '';

// Check if we need a new company
$sql = "SELECT company_ID FROM companies WHERE upper(name) = :co";
$stmt = $conn->prepare($sql);
$stmt->execute(array(':co' => strtoupper($_POST['inputCompany'])));
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($results) == 0) {
  // Need to insert company
  $sql = "INSERT INTO companies (name) VALUES (:co)";
  $stmt = $conn->prepare($sql);
  $stmt->execute(array(':co' => $_POST['inputCompany']));
  $company_id = $conn->lastInsertId();
  $message .= 'Added new company. ';
} else {
  $company_id = $results[0]['company_ID'];
}

// Check if we need a new department
$sql = "SELECT department_ID FROM departments WHERE upper(name) = :dep";
$stmt = $conn->prepare($sql);
$stmt->execute(array(':dep' => strtoupper($_POST['inputDepartment'])));
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($results) == 0) {
  // Need to insert company
  $sql = "INSERT INTO departments (name) VALUES (:dep)";
  $stmt = $conn->prepare($sql);
  $stmt->execute(array(':dep' => $_POST['inputDepartment']));
  $department_id = $conn->lastInsertId();
  $message .= 'Added new department. ';
} else {
  $department_id = $results[0]['department_ID'];
}

// Check if we need a new process
$sql = "SELECT process_ID FROM processes WHERE upper(name) = :pro";
$stmt = $conn->prepare($sql);
$stmt->execute(array(':pro' => strtoupper($_POST['inputProcess'])));
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (count($results) == 0) {
  // Need to insert company
  $sql = "INSERT INTO processes (name) VALUES (:pro)";
  $stmt = $conn->prepare($sql);
  $stmt->execute(array(':pro' => $_POST['inputProcess']));
  $process_id = $conn->lastInsertId();
  $message .= 'Added new process. ';
} else {
  $process_id = $results[0]['process_ID'];
}


echo $process_id;
