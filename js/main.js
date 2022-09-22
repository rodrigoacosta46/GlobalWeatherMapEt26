function weather(){
    var latitud = $('#la').val();
    var longitud = $('#lon').val();
    let dia;

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?lat=34.93011110800733&lon=-57.54643436237738&appid=2be41a993eaf59fb2c6d4e960c4a2e5f&units=metric&lang=sp',
        dataType: 'json',

        success: function(datos){
            console.log(datos);
            $('#mainCont').html('');

            for(i=0; i<datos['list'].length; i++){
                display = 'none';
                dia = new Date(datos['list'][i]['dt_txt']).getDay();
                    if(dia == new Date().getDay()){
                        display = 'flex';
                    }
                document.getElementById('mainCont').innerHTML += "<div class='"+dia+"'><div style='display:"+display+"'class='dayCont'><p>"+new Date(datos['list'][i]['dt_txt']).getHours()+':00'+"</p><div class='dayInf'><div class='row'>&#128167; Humedad "+datos["list"][i]["main"]["humidity"]+"%</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/3161/3161249.png'>Temperatura "+datos['list'][i]['main']['temp']+"°</div></div><div class='dayInf'><div class='row'><img src='https://cdn-icons-png.flaticon.com/512/4005/4005925.png'> Presion "+datos['list'][i]['main']['pressure']+"hPa</div></div><div class='dayInf'><div class='row'><img src='http://openweathermap.org/img/wn/"+datos['list'][i]['weather'][0]['icon']+".png'> "+datos['list'][i]['weather'][0]['description']+"</div></div></div></div";
            }
            
            for(j=0; j<7; j++){
                $('#d'+j).attr('onclick', 'day('+j+','+new Date().getDay()+')');
            }
        }
    })
}

function day(newDay, currentDay){
    $('.'+newDay).children().attr('style', 'display: flex');
    for(j=0; j<7; j++){
        $('#d'+j).attr('onclick', 'day('+j+','+newDay+')');
    }
    $('.'+currentDay).children().attr('style', 'display: none');
}
    