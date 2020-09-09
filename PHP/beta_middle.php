<?php
    #echo "This is Middle Tier for beta<br>";
    
    //$str_json = file_get_contents('php://input');
    $data = json_decode(file_get_contents('php://input'), true);
    
    //me send to backend
    //
    
    $ch = curl_init("https://web.njit.edu/~lng7/CS490/beta.php");
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    //curl_setopt($ch, CURLOPT);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    
    //backend send to me
    //
    $backresult = curl_exec($ch);
    curl_close($ch);
    
    $backresult = json_decode($backresult, true);
    
    //echo $backresult;
    echo json_encode($backresult);
    
    ?>

