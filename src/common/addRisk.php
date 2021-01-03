<?php


// If mandatory fields are set proceed
require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

$sql = "SELECT * FROM risks";
$stmt = $conn->prepare($sql);
$stmt->execute();
$risks = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo( 'Prob Rating is ' . ($_POST['inputProbRating'] ==='') );
