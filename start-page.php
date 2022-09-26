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
        <div id="title">
            <p>GlobalWeatherMap</p>
            <img src="https://cdn-icons-png.flaticon.com/512/44/44748.png">
        </div>
    </header>

    <div class="loading" style="display: none;">
        <img src="https://acegif.com/wp-content/uploads/loading-11.gif">
        <p>Cargando página...</p>
    </div>

<?php 
    switch($_GET['sec']){
        case 'cty':
            require 'views/city.php';
            break;

        case 'we':
            require 'views/weather.php';
            break;

        case 'mp':
            require 'views/map.php';
            break;
    }
    
?>