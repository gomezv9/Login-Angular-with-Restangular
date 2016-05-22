<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {  
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");  
    header('Access-Control-Allow-Credentials: true');  
    header('Access-Control-Max-Age: 86400');   
}  
  
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {  
  
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))  
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");  
  
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))  
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");  
}  

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


if ( $request['user'] == "jaime" && $request['pwd'] == "12345" ){

	$Respuesta = json_encode( array('err' => false, 'token'=> MD5(microtime()), 'user' => $request['user']));
}else{
	$Respuesta = json_encode( array('err' => true, 'mensaje'=> "Error" ));
}

echo $Respuesta;

?>