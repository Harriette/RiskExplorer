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
              <div class="ratio ratio-1x1" id="riskmap_graph">
              </div>
            </div>

            <!-- Risk Details Panel -->
            <div class="col-6" id="risk_details_panel">
              <h2>Risks Details</h2>
                <table class="table table-sm table-striped" id="risk_details_table">
                  <tr><th>ID</th><td id="risk-details-id"></td></tr>
                  <tr><th>Name</th><td id="risk-details-name"></td></tr>
                  <tr><th>Description</th><td id="risk-details-description"></td></tr>
                  <tr><th>Probability Rating</th><td id="risk-details-prob_rating"></td></tr>
                  <tr><th>Severity Rating</th><td id="risk-details-severity_rating"></td></tr>
                  <tr><th>Reputation Rating</th><td id="risk-details-reputation_rating"></td></tr>
                  <tr><th>RAG Rating</th><td id="risk-details-rag_rating"></td></tr>
                  <tr><th>Loss</th><td id="risk-details-loss"></td></tr>
                  <tr><th>Level</th><td id="risk-details-risk_level"></td></tr>
                  <tr><th>Company</th><td id="risk-details-company"></td></tr>
                  <tr><th>Department</th><td id="risk-details-department"></td></tr>
                  <tr><th>Process</th><td id="risk-details-process"></td></tr>
                </table>
              <!--Add table in javascript-->
            </div>

        </div>



        <!-- Risk Log -->
        <div class="row" id="page-risklog">

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

<script type="module" src="js/risks7.js"></script>

</html>
