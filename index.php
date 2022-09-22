<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/44/44748.png">
    <script src="js/main.js"></script>
    <title>GlobalWeatherMap</title>
</head>
<body>
    <header class="top">
        <div>
            <p>GlobalWeatherMap</p>
            <img src="https://cdn-icons-png.flaticon.com/512/44/44748.png">
        </div>
    </header>
    <div class="data">Ingrese datos Geográficos</div>
    <div class="form">
        <input type="text" placeholder="Latitud" class="info" id="la">
        <input type="text" placeholder="Longitud" class="info" id="lon">
        <input type="button" onclick="weather()" value="Enviar">
    </div>
    <div class="days">
        <input type="button" value="Lunes" id="d1">
        <input type="button" value="Martes" id="d2">
        <input type="button" value="Miercoles" id="d3">
        <input type="button" value="Jueves" id="d4">
        <input type="button" value="Viernes" id="d5">
        <input type="button" value="Sabado" id="d6">
        <input type="button" value="Domingo" id="d0">        
    </div>
    <div class="mainCont" id="mainCont"></div>
    <p class="none">No se registraron datos</p>
</body>
</html>