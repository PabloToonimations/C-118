$(document).ready(function(){
    
    console.log('El documento está listo')

    // Obteniendo la facha usando el objeto
    //Date() y convirtiéndolos a cadena de caracteres
    let date = new Date()
    let current_date = date.toDateString()

    // Mostrar la fecha en la página HTML usando JQUERY y JS
    $('#date').text('Fecha ' + current_date)


    let review = ""
    let input_data = ""
    let product = ""
    let emotion = ""
    let emoji_url = ""

    // Haciendo una función para una petición AJAX
    function ajax_request(api_url , input_data){

        $.ajax({

            // Tipo de petición
            type : 'POST',

            // URL
            url : api_url,

            // Datos JSON
            data : JSON.stringify(input_data),

            // Tipo de dato de la respuesta esperada
            dataType: 'json',

            // Typo de contenido
            contentType : 'application/json',

            // Método success
            success : function(result)
            {
                // Extraer la ruta de los sentimientos y emoticonos
                emotion = result.sentiment
                emoji_url = result.path
            }
        })
    }
})