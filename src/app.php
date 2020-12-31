<?php
session_start();

require_once 'common/DbConnect.php';
$db = new DbConnect();
$conn = $db->connect();



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

        <select class="form-select mt-3" name="selectCompany" aria-label="Select company">
          <option value="1" selected>Choose Company</option>
          <option value="2">UK Club</option>
          <option value="3">TM</option>
        </select>

        <select class="form-select" name="selectDepartment" aria-label="Select company">
          <option value="1" selected>Choose Department</option>
          <option value="2">Claims</option>
          <option value="3">Underwriting</option>
        </select>

      </div>

      <!-- Main -->
      <main class="col-md-9 col-lg-10 ms-sm-auto px-md-4">

        <!-- Risk Log -->
        <div class="container" id="page-risklog">

          <h1>Risk Log</h1>

          <div class="container" id="table-risklog">

            <table id="risklog-table" class="display">
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1 Data 1</td>
                        <td>Row 1 Data 2</td>
                    </tr>
                    <tr>
                        <td>Row 2 Data 1</td>
                        <td>Row 2 Data 2</td>
                    </tr>
                </tbody>
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
    $('#risklog-table').DataTable();
  } );
</script>


</html>
