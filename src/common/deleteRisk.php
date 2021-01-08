<?php

session_start();

//Set up connection
require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();


// Replicate risk and then change is-deleted field
// Replicate risk
$sql = "INSERT INTO risks
          (id, name, description, loss, prob_rating, severity_rating, reputation_rating, rag_rating,
            risk_level, company_ID, department_ID, process_ID)
        SELECT
          id, name, description, loss, prob_rating, severity_rating, reputation_rating, rag_rating,
          risk_level, company_ID, department_ID, process_ID
        FROM risks
        WHERE risk_ID = :id;
";
$stmt = $conn->prepare($sql);
$stmt->execute(array(':id' => $_POST['id']));

$id = $conn->lastInsertID();

$sql = "UPDATE risks SET is_deleted = 1 WHERE risk_ID = " . $id;
$stmt = $conn->prepare($sql);
$stmt->execute();

$_SESSION['success'] = 'Risk deleted.';
