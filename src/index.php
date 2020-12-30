<?php
  session_start();

  require_once 'common/DbConnect.php';
  $db = new DbConnect();
  $conn = $db->connect();

  if( isset( $_POST['inputUsername'] ) && isset( $_POST['inputPassword'] ) ) {

    $e = $_POST['inputEmail'];
    $p = $_POST['inputPassword'];

    $sql = "SELECT profile_id, password_hash FROM users WHERE user_name = :un";
    $stmt = $conn->prepare($sql);
    $stmt->execute( array( ':un' => $_POST['inputUsername'] ) );
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $res = password_verify($_POST['inputPassword'], $row['password_hash']);

    if ( $res === FALSE ) {
       error_log("Login fail ".$_POST['inputEmail']);
       $_SESSION['error'] = "Login incorrect.";
       header("Location: index.php");
       return;
    } else {
      error_log("Login success ".$_POST['inputEmail']);
      $_SESSION['success'] = "Login successful.";
      $_SESSION['user'] = $row['name'];
      header("Location: app.php");
      return;
    }

  }

?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Risk Explorer</title>
<?php require_once "common/head.php" ?>

  </head>
  <body>

    <!--Mask-->
    <div id="intro" class="view">

        <div class="mask rgba-black-strong">

            <div class="container-fluid d-flex align-items-center justify-content-center h-100">

                <div class="row d-flex justify-content-center text-center">

                    <div class="col-md-10">

                        <!-- Heading -->
                        <h2 class="display-4 white-text pt-5 mb-2">Risk Explorer</h2>

                        <!-- Divider -->
                        <hr style="color: white;">

                        <!-- Login form -->
                        <form class="login white-text" method="post">

                          <div class="mb-3">
                            <label for="inputUsername" class="form-label text-left">User name</label>
                            <input type="text" class="form-control" name="inputUsername" value="" placeholder="username">
                          </div>

                          <div class="mb-3">
                            <label for="inputPassword" class="form-label text-left">Password</label>
                            <input type="password" class="form-control" name="inputPassword" value="" placeholder="password">
                          </div>

                          <div class="mb-3">
                            <button type="submit" class="btn btn-outline-light">Log in</button>
                          </div>

                        </form>

                        <div class="">
<?php require_once "common/flash_messages.php" ?>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    <!--/.Mask-->

  </body>
</html>
