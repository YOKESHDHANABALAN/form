<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$uname = $_POST['uname'];
$upswd1 = $_POST['upswd1'];
$upswd2 = $_POST['upswd2'];




if (!empty($fname) || !empty($lname) || !empty($uname) || !empty($email) || !empty($upswd1) || !empty($upswd2)) {

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "dbform";



    // Create connection
    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From uprofile Where email = ? Limit 1";
        $INSERT = "INSERT Into uprofile (nickname , contact , uaddress , umonth ,uday, uyear )values(?,?,?,?,?,?)";

        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $contact);
        $stmt->execute();
        $stmt->bind_result($contact);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        //checking username
        if ($rnum == 0) {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssssss", $nickname, $contact, $uaddress, $umonth, $uday, $uyear);
            $stmt->execute();
            echo "New record inserted sucessfully";
        } else {
            echo "Someone already register using this email";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "All field are required";
    die();
}
?>
<?php
?>