function weather(){
    var latitud = $('#la').val();
    var longitud = $('#lon').val();
    let dia;

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?lat='+latitud+'&lon='+longitud+'&appid=2be41a993eaf59fb2c6d4e960c4a2e5f&units=metric&lang=sp',
        dataType: 'json',

        success: function(datos){
            console.log(datos);
            $('#mainCont').html('');
            $('.location').html(''+datos['city']['name']+'('+datos['city']['country']+')')
            for(i=0; i<datos['list'].length; i++){
                display = 'none';
                dia = new Date(datos['list'][i]['dt_txt']).getDay();
                    if(dia == new Date().getDay()){
                        display = 'flex';
                    }
                document.getElementById('mainCont').innerHTML += "<div class='"+dia+"'><div style='display:"+display+"'class='dayCont'><p>"+new Date(datos['list'][i]['dt_txt']).getHours()+':00'+"</p><div class='dayInf'><div class='row'>&#128167; Humedad "+datos["list"][i]["main"]["humidity"]+"%</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/3161/3161249.png'>Temperatura "+datos['list'][i]['main']['temp']+"°</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/4005/4005925.png'> Presion "+datos['list'][i]['main']['pressure']+"hPa</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/1959/1959345.png'> Viento "+datos["list"][i]["wind"]["speed"]+"km/h</div></div><div class='dayInf'><div class='row'><img src='http://openweathermap.org/img/wn/"+datos['list'][i]['weather'][0]['icon']+".png'> "+datos['list'][i]['weather'][0]['description']+"</div></div></div></div";
            }
            
            for(j=0; j<7; j++){
                $('#d'+j).attr('onclick', 'day('+j+','+new Date().getDay()+')');
                $('#d'+j).attr('style', 'background-color: white');
            }
            $('#d'+new Date().getDay()).attr('style', 'background-color: yellow');
        },

        error: function(){
            $('.data').html('No se encontró lugar Geográfico');
            setTimeout(function(){
                $('.data').html('Ingrese datos Geográficos');
            }, 3000)
        }
    })
}

function day(newDay, currentDay){
    $('.none').attr('style', 'display: none');
    if(newDay == currentDay){
        return;    
    }

    else if($('.'+newDay).children().val() == undefined){
        $('.none').attr('style', 'display: flex');
    }

    $('#d'+currentDay).attr('style', 'background-color: white');
    $('#d'+newDay).attr('style', 'background-color: yellow');

    $('.'+newDay).children().attr('style', 'display: flex');
    for(j=0; j<7; j++){
        $('#d'+j).attr('onclick', 'day('+j+','+newDay+')');
    }
    $('.'+currentDay).children().attr('style', 'display: none');
}
    