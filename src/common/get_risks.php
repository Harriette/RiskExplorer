<?php

require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

$sql = "
SELECT
	risk_ID,
  id,
  risks.name AS 'name',
  description,
  prob_rating,
  severity_rating,
  reputation_rating,
  rag_rating,
  loss,
  risk_level,
  companies.name AS 'company',
  departments.name AS 'department',
	processes.name AS 'process',
	created_at,
	modified_at
FROM risks
		LEFT JOIN companies ON risks.company_ID = companies.company_ID
		LEFT JOIN departments ON risks.department_ID = departments.department_ID
		LEFT JOIN processes ON risks.process_ID = processes.process_ID
WHERE is_deleted = 0;
";

$stmt = $conn->prepare($sql);
$stmt->execute();
$risks = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($risks, JSON_PRETTY_PRINT);
