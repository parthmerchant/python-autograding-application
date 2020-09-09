<?php
    
    $data = json_decode(file_get_contents('php://input'), true);
    $ucid = $data['username'];
    $pass = $data['password'];
    
   
    $backsend = array(
                  "username" => $ucid,
                  "password" => $pass
                  
                  );
    
    
    $ch = curl_init("https://web.njit.edu/~lng7/CS490/middle.php");
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($backsend));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $backresult = curl_exec($ch);
    curl_close($ch);
    
    $backresult = json_decode($backresult, true);
    
    echo json_encode($backresult);

?>
