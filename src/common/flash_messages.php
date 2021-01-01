<?php

  if ( isset($_SESSION['error']) ) {
    echo('<span style="color: red;">' . htmlentities($_SESSION['error']) . '</span>');
    unset($_SESSION['error']);
  }
  if ( isset($_SESSION['success']) ) {
    echo('<span style="color: green;">' . htmlentities($_SESSION['success']) . '</span>');
    unset($_SESSION['success']);
  }
