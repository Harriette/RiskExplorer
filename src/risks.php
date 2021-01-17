<?php
session_start();
header('Cache-Control: max-age=10');

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

        <!-- Risk Map -->
        <div class="container" id="riskmap">

          <h1>Risk Map</h1>

            <div class="container p-0" id="riskmap_graph">

            </div>

        </div>


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

            </div><!-- End of Risk Log table -->

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#addRiskModal">
              Add new risk
            </button>

          </div><!-- End of Risk Log -->



          <!-- Add risk modal -->
          <?php require_once "common/risks-modal.php" ?>






        </main>

      </div>

    </div>

  </body>

  <script type="module" src="js/risks2.js"></script>

</html>
