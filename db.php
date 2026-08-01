<?php
$enosi = new mysqli("localhost", "root", "admin", "paw_corner");
if ($enosi->connect_error) { 
    die("DB ERROR: " . $enosi->connect_error);
}

echo "DB OK ✔";
?>


