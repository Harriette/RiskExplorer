<?php
session_start();

require_once 'common/DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();

$sql = "SELECT * FROM risks";
$stmt = $conn->prepare($sql);
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC)

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Risk Explorer</title>
  <?php require_once "common/head.php" ?>
</head>
<body>
  <!-- Navbar -->
  <header>
    <?php require_once "common/nav.php" ?>
  </header>

  <div class="container-fluid">

    <div class="row vh-100">

      <!-- Sidebar -->
      <div class="col-md-3 col-lg-2 d-md-block bg-light sidebar">

        <form class="">
          <div class="mb-3">
            <label for="selectCompany">Company:</label>
            <select class="form-select" name="selectCompany" id="selectCompany" aria-label="Select company">
              <!-- Filled by javascript -->
            </select>
          </div>
          <div class="mb-3">
            <label for="selectDepartment">Department:</label>
            <select class="form-select" name="selectDepartment" id="selectDepartment" aria-label="Select department">
              <!-- Filled by javascript -->
            </select>
          </div>
        </form>

      </div>

      <!-- Main -->
      <main class="col-md-9 col-lg-10 ms-sm-auto px-md-4">

        <!-- Risk Log -->
        <div class="" id="page-risklog">

          <h1>Risk Log</h1>

          <div class="container" id="table-risklog">

            <table id="risklog-table" class="display">
              <thead>
                <tr>
                  <th rowspan="2">ID</th>
                  <th rowspan="2">Level</th>
                  <th rowspan="2">Name</th>
                  <th rowspan="2">Description</th>
                  <th colspan="4">Ratings</th>
                  <th rowspan="2">Company</th>
                  <th rowspan="2">Department</th>
                  <th rowspan="2">Process</th>
                  <th rowspan="2">Actions</th>
                <tr>
                  <th>Prob</th>
                  <th>Sev</th>
                  <th>Rep</th>
                  <th>RAG</th>
                </tr>
              </thead>
              <!-- Javascript to fill the table -->
            </table>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRiskModal">
              Add new risk
            </button>

            <!-- Add risk modal -->
            <?php require_once "common/risks-modal.php" ?>

          </div>

        </div>
        <!-- End of Risk Log -->







      </main>

    </div>

  </div>

</body>

<script type="text/javascript">
  $(document).ready( function () {

    console.log('Get company data');
    $.getJSON('common/get_tables.php', 'table=companies', initSelector('#selectCompany') );

    console.log('Get department data');
    $.getJSON('common/get_tables.php', 'table=departments', initSelector('#selectDepartment') );

    console.log('Get risk data');
    $.getJSON('common/get_risks.php', initRisklogTable('#risklog-table') );


  });

</script>

<script type="text/javascript">
  // Do this *after* the table tag is rendered
</script>

</html>
