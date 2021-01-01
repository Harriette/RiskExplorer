<?php

require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

$sql = "
SELECT * FROM departments;
";

$stmt = $conn->prepare($sql);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results, JSON_PRETTY_PRINT);
