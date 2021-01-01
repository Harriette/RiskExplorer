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

        <select class="form-select mt-3" name="selectCompany" id="selectCompany" aria-label="Select company">
          <!-- Filled by javascript -->
        </select>

        <select class="form-select mt-3" name="selectDepartment" id="selectDepartment" aria-label="Select department">
          <!-- Filled by javascript -->
        </select>

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


            </table>

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
    $.getJSON('common/get_companies.php', initSelector('#selectCompany', 'Choose company') );


    console.log('Get department data');
    $.getJSON('common/get_departments.php', initSelector('#selectDepartment', 'Choose department') );

    console.log('Get risk data');
    $.getJSON('common/get_risks.php', initRisklogTable('#risklog-table') );
  });

</script>

<script type="text/javascript">
  // Do this *after* the table tag is rendered
</script>

</html>
