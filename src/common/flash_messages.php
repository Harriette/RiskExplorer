<?php

  if ( isset($_SESSION['error']) ) {
    echo('<p style="color: red;">' . htmlentities($_SESSION['error']) . '</p>');
    unset($_SESSION['error']);
  }
  if ( isset($_SESSION['success']) ) {
    echo('<p style="color: green;">' . htmlentities($_SESSION['success']) . '</p>');
    unset($_SESSION['success']);
  }
