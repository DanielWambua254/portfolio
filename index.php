<?php
$name = $_POST["name"];
$name = $_POST["email"];
$name = $_POST["subject"];
$name = $_POST["message"];

//databasse connection

$conn  = new mysqli('localhost', 'root', '', 'test');

if($conn ->connect_error ) {
    die("Connection failed !". $conn ->connect_error);
} else {

}
?>
