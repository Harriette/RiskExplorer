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

        <!-- Risk Map Section-->
        <div class="row" id="riskmap">

            <h1>Risk Map</h1>

            <!-- Risk Map Graph on left of screen -->
            <div class="col-6 p-0">
              <div class="ratio ratio-1x1" id="riskmap_graph"></div> <!--Want a square and add map in javascript-->
            </div>

            <!-- Risk Details Panel -->
            <div class="col-6" id="risk_details_panel"></div> <!--Add table in javascript-->

        </div>

        <!-- Risk Log -->
        <div class="row" id="page-risklog">

          <h1>Risk Log</h1>

          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#addRiskModal">
            Add new risk
          </button>

          <div class="container" id="table-risklog"></div> <!-- Create with javascript -->

        </div><!-- End of Risk Log -->


        <!-- Add risk modal -->
        <?php require_once "common/risks-modal.php" ?>






      </main>

    </div>

  </div>

</body>

<script type="module" src="js/risks11.js"></script>

</html>
