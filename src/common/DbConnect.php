<?php
	class DbConnect {
		private $host = 'riskexplorer_db_1:3306';
		private $dbName = 'riskexplorer';
		private $user = 'root';
		private $pass = 'example';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' . $this->host . '; dbname=' . $this->dbName, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch( PDOException $e) {
				echo 'Database Error: ' . $e->getMessage() . '</br>';
			}
		}
	}
 ?>
