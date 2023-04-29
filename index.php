<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "TYSY";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);
if(isset($_GET["login"])){
    $data = json_decode(file_get_contents("php://input"));
    $email=$data->email;
    $password=$data->password;
    $sqlUsuarios = mysqli_query($conexionBD,"SELECT * FROM usuarios WHERE email='$email' and password='$password'");
    if(mysqli_num_rows($sqlUsuarios) > 0){
        $sqlUsuarios = mysqli_fetch_all($sqlUsuarios,MYSQLI_ASSOC);
        echo json_encode($sqlUsuarios);
    }
    else{  echo json_encode(["success"=>0]); }
    exit();
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){ // vamos aqui
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    $edad=$data->edad;
    $trabajo=$data->trabajo;
    $email=$data->email;
    $telefono=$data->telefono;
    $password=$data->password;
    $barrio=$data->barrio;
    $descripcion=$data->descripcion;
        if(($nombre!="")&&($apellido!="")&&($edad!="")&&($trabajo!="")&&($email!="")&&($telefono!="")&&($password!="")&&($barrio!="")&&($descripcion!="")){
            
    $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO empleados(nombre,apellido,edad,trabajo,email,telefono,password,barrio,descripcion) VALUES('$nombre','$apellido','$edad','$trabajo','$email','$telefono','$password','$barrio','$descripcion') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}

if(isset($_GET["insertar2"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    $edad=$data->edad;
    $email=$data->email;
    $telefono=$data->telefono;
    $password=$data->password;
        if(($nombre!="")&&($apellido!="")&&($edad!="")&&($email!="")&&($telefono!="")&&($password!="")){
            
    $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO usuarios(nombre,apellido,edad,email,telefono,password) VALUES('$nombre','$apellido','$edad','$email','$telefono','$password') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}
if(isset($_GET["empleados"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados ");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

?>
