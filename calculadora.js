$(document).ready(function() {

	var ans = "";

	function limpiar(){

		$("#pantalla").val("");
	} 
	limpiar();  //esto se ejecuta solo al inicio

    function sacaresultado(pantalla){

        var resultado
         try {

            //si se pone 1 solo parentesis al final lo quita
            if (pantalla[pantalla.length-1] == ")"){
                pantalla = pantalla.slice(0,pantalla.length-1);
            }

            if(pantalla.indexOf("cos") != -1){

                resultado = Math.cos(parseFloat(pantalla.slice(4)));

            }else if(pantalla.indexOf("sin") != -1){

                resultado = Math.sin(parseFloat(pantalla.slice(4)));
                
            }else if(pantalla.indexOf("tan") != -1){

                resultado = Math.tan(parseFloat(pantalla.slice(4)));

            }else if(pantalla.indexOf("*10^") != -1){

                var pos = pantalla.indexOf("*");
                var cons = pantalla.slice(0, pos);
                resultado = parseFloat(cons) * Math.pow(10,pantalla.slice(pos+5));

            }else if(pantalla.indexOf("^") != -1){

                var pos = pantalla.indexOf("^");
                var cons = pantalla.slice(0, pos);
                console.log(pantalla.slice(pos));
                resultado = Math.pow(cons,pantalla.slice(pos+1));

            }else if(pantalla.indexOf("√") != -1){
                
                resultado = Math.pow(pantalla.slice(2),(1/2));

            }else if(pantalla.indexOf("ln") != -1){

                resultado = Math.log(pantalla.slice(3));

            }else if(pantalla.indexOf("log") != -1){

                resultado = Math.log10(pantalla.slice(4));


            }else{
       
                resultado = eval(pantalla);
            }
            ans = resultado;           
        }catch(err) {
            resultado = "------ERROR------";
                }
        $("#pantalla").val(resultado);

    }

    $('.tecla , .mtecla').click(function(){

    	var valor = $(this).text();

        switch(valor){
            case "=":
                var pantalla = $('#pantalla').val();
                sacaresultado(pantalla);
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

            case "--":
                valor = "";
                break;

            case "x^":
                valor = "^";
                break;

            case "*10^": case "cos": case "tan": case "sin":
            case "x^": case "√": case "log": case "ln":
                valor += "(";
        }

    	$("#pantalla").val($("#pantalla").val() + valor);
   
    });


});