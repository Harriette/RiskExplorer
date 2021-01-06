<?php

require_once 'DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

$sql = "
SELECT
  risks.risk_ID,
  risks.id,
  risks.name AS 'name',
  risks.description,
  risks.prob_rating,
  risks.severity_rating,
  risks.reputation_rating,
  risks.rag_rating,
  risks.loss,
  risks.risk_level,
  companies.name AS 'company',
  departments.name AS 'department',
  processes.name AS 'process',
  risks.created_at,
  risks.modified_at
FROM risks
		LEFT JOIN companies ON risks.company_ID = companies.company_ID
		LEFT JOIN departments ON risks.department_ID = departments.department_ID
		LEFT JOIN processes ON risks.process_ID = processes.process_ID
		INNER JOIN (
			SELECT id, max(modified_at) as LatestDate
			FROM risks
			GROUP BY id
		) rl ON risks.id = rl.id AND risks.modified_at = rl.LatestDate
WHERE is_deleted = 0;
";

$stmt = $conn->prepare($sql);
$stmt->execute();
$risks = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($risks, JSON_PRETTY_PRINT);
