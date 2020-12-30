<?php
  session_start();



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

                    </div>

                </div>

            </div>

        </div>

    </div>
    <!--/.Mask-->

  </body>
</html>
