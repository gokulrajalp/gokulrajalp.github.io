<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database</title>
</head>
<body>
 <table border = 2>
<tr>
    <th>Student Name</th>
    <th>Student Roll_NO</th>
    <th>Student Dept</th>
    <th>Student dob</th>
</tr>

<?php

$conn = mysqli_connect('localhost','root','','gokulraja');

$sql = 'select * from student';

$result = $conn -> query($sql);

if($result -> num_rows > 0){
    while($row = $result -> fetch_assoc()){
        echo '<tr><td>' . $row["std_name"] .'</td><td>' . $row["std_roll_no"] .'</td><td>' . $row["std_dept"] .'</td><td>' . $row["std_dob"] .'</td></tr>'; 
    }
}
else{
    echo 'no data found';
}

$conn -> close();
?>
</table>
</body>
</html>