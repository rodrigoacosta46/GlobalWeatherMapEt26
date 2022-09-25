function get(){
    url = window.location.href;
    locationData = url.split('?');
    placeInf(locationData[1]);
}

function weather(){
    var ciudad = $('#cityname').val();

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&appid=2be41a993eaf59fb2c6d4e960c4a2e5f&units=metric&lang=sp',
        dataType: 'json',

        success: function(data){
            console.log(data);
            latitud = data['coord']['lat'];
            longitud = data['coord']['lon'];
            location.assign('start-page.php?lat='+latitud+'&lon='+longitud+'?&sec=we');
        },

        error: function(){
            $('.data').html('No se encontró lugar Geográfico');
            setTimeout(function(){
                $('.data').html('Busque el clima de una ciudad');
            }, 3000);
        }
    });
}
 
function placeInf(urlInf){
    let dia;
    let fecha = new Date();
    let mes = fecha.getMonth() + 1;
    let dayTime = fecha.getDate()-1;

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?'+urlInf+'&appid=2be41a993eaf59fb2c6d4e960c4a2e5f&units=metric&lang=sp',
        dataType: 'json',

        success: function(datos){
            console.log(datos);
            $('#mainCont').html('');
            //$('.location').html(''+datos['city']['name']+'('+datos['city']['country']+')')
            for(i=0; i<datos['list'].length; i++){
                display = 'none';
                dia = new Date(datos['list'][i]['dt_txt']).getDay();
                    if(dia == dayTime){
                        display = 'flex';
                    }
                document.getElementById('mainCont').innerHTML += "<div class='"+dia+"'><div style='display:"+display+"'class='dayCont'><p>"+new Date(datos['list'][i]['dt_txt']).getHours()+':00'+"</p><div class='dayInf'><div class='row'>&#128167; Humedad "+datos["list"][i]["main"]["humidity"]+"%</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/3161/3161249.png'>Temperatura "+datos['list'][i]['main']['temp']+"°</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/4005/4005925.png'> Presion "+datos['list'][i]['main']['pressure']+"hPa</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/1959/1959345.png'> Viento "+datos["list"][i]["wind"]["speed"]+"m/s</div></div><div class='dayInf'><div class='row'><img src='http://openweathermap.org/img/wn/"+datos['list'][i]['weather'][0]['icon']+".png'> "+datos['list'][i]['weather'][0]['description']+"</div></div></div></div";
            }

            for(j=6; j>-1; j--){
                $('#d'+j).attr('onclick', 'day('+j+','+new Date().getDay()+')');             
            }

            $('#d'+new Date().getDay()).attr('value', 'Hoy');
        }
    })
}

function day(newDay, currentDay){
    $('.none').attr('style', 'display: none');

    if($('.'+newDay).children().val() == undefined){
        $('.none').attr('style', 'display: flex');
    }

    $('#d'+currentDay).css('style', 'background-color: rgb(2, 10, 32);');
    $('#d'+newDay).css('style', 'background-color: lightblue');

    $('.'+currentDay).children().attr('style', 'display: none');
    $('.'+newDay).children().attr('style', 'display: flex');
    $('#n'+currentDay).attr('style', 'display: none');
    $('#n'+newDay).attr('style', 'display: flex');

    for(j=0; j<7; j++){
        $('#d'+j).attr('onclick', 'day('+j+','+newDay+')');
    }
}