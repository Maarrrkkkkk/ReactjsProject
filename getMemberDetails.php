<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Assuming you have a database connection established
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfoliowebproj";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if 'id' parameter is passed in the request
if(isset($_GET['id'])) {
    // Sanitize the incoming 'id' to prevent SQL injection (you might use a more secure method depending on your database)
    $memberId = $_GET['id'];

    // Your SQL query to fetch member details based on the ID
    $query = "SELECT * FROM members WHERE id = $memberId"; // Change 'members' to your actual table name

    // Perform the query and fetch data
    $result = $conn->query($query);

    // Check if query was successful
    if($result) {
        // Fetch member details as an associative array
        $memberDetails = $result->fetch_assoc();

        // Return member details as JSON response
        echo json_encode($memberDetails);
    } else {
        // Handle query error
        echo json_encode(array('error' => 'Failed to fetch member details.'));
    }
} else {
    // Handle if 'id' parameter is not provided
    echo json_encode(array('error' => 'No member ID provided.'));
}

$conn->close();
?>
