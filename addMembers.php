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

$firstName = $conn->real_escape_string($data->firstName);
$lastName = $conn->real_escape_string($data->lastName);
$imageUrl = $conn->real_escape_string($data->imageUrl);
$activitiesLink = $conn->real_escape_string($data->activitiesLink);
$about = $conn->real_escape_string($data->about);

$sql = "INSERT INTO members (firstName, lastName, imageUrl, activitiesLink, about) VALUES ('$firstName', '$lastName', '$imageUrl', '$activitiesLink', '$about')";

if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    $sql = "SELECT * FROM members WHERE id = $last_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo json_encode(["message" => "Error: No member found with id " . $last_id]);
    }
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
