jQuery(document).ready(function() {

	var ans = "";

	function limpiar(){

		$("#pantalla").val("");
	} 
	limpiar();  //esto se ejecuta solo al inicio

    
    $('.tecla').click(function(){

    	var valor = $(this).text();
    	
    	if (valor == "AC"){
    		limpiar();
    		return;
    	}
    	else if (valor == "DEL"){
    		$("#pantalla").val($("#pantalla").val().slice(0,$("#pantalla").val().length-1));
    		return;
    	}
    	else if (valor == "ANS"){
    		valor = ans;
    	}

    	$("#pantalla").val($("#pantalla").val() + valor);
   
    });


    $('.igual').click(function(){
    	var resultado = eval($('#pantalla').val());
    	ans = resultado;
    	$("#pantalla").val(resultado);
    	console.log(resultado);
    });

});