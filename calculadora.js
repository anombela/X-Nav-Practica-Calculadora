$(document).ready(function() {

	var ans = "";

	function limpiar(){

		$("#pantalla").val("");
	} 
	limpiar();  //esto se ejecuta solo al inicio

    
    $('.tecla').click(function(){

    	var valor = $(this).text();

        switch(valor){
            case "=":
                var pantalla = $('#pantalla').val();
                try {
                    var resultado = eval(pantalla);
                    ans = resultado;           
                }catch(err) {
                    resultado = "--ERROR--";
                }
                $("#pantalla").val(resultado);
                return;

            case "AC":
                limpiar();
                return;
    
    	    case "DEL":
                $("#pantalla").val($("#pantalla").val().slice(0,$("#pantalla").val().length-1));
                return;

            case "ANS":
                valor = ans;
                break;

            case "*10^":
                valor += "(";
        }

    	$("#pantalla").val($("#pantalla").val() + valor);
   
    });


});