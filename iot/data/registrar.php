<?php
header('Content-Type: application/json');

include("conexion.php");

$obj = new Conexion;
$response=array();

$json=file_get_contents('php://input');
$jsonObj=json_decode($json,true);

$nombre=$jsonObj["pNombre"];
$nomusu=$jsonObj["pNomuser"];
$correo=$jsonObj["pCorreo"];
$pass=$jsonObj["pPass"];

$consulta= "INSERT INTO usuario(nombre,nomuser,correo,pass) VALUES ('".$nombre."',
                                                                    '".$nomuser."',
                                                                    '".$correo."',
                                                                    '".$pass."')";

$res=$obj->registrarUsuario($consulta);

if($res==1){
	$response['status']=1;
}else{
	$response['status']=0;
}

echo json_encode($response,JSON_FORCE_OBJECT);
?>