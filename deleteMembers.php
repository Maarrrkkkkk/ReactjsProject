<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfoliowebproj";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$id = $conn->real_escape_string($data->id);

$sql = "DELETE FROM members WHERE id = '$id'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Member was deleted."]);
} else {
    echo json_encode(["message" => "Unable to delete member. Error: " . $conn->error]);
}

$conn->close();
