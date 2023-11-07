//var numeroSecreto = parseInt(Math.random() * 100 + 1);
var numeroSecreto = 10;
var numIntentos = 5;
var resultado = "";

function disabledButton () {
    document.getElementById("adivinar").disabled = true;
};

var mostrarNum = document.getElementById("attemps");
mostrarNum.innerHTML = numIntentos;

var outOfAttemps = document.getElementById("attemps");

do
{
    function ingresarNumero(){
        var numeroDigitado = document.getElementById("num").value;

        if (numeroDigitado <= 0 || numeroDigitado > 100)
        {
            alert ("Error...\nEl valor ingresado no es valido\nIntentelo de nuevo");
        }
        else
        {
            if (numeroSecreto == numeroDigitado)
             {
                resultado = document.getElementById("win");
                resultado.innerHTML = ("¡¡Acertaste!!<br>El numero secreto es " + numeroDigitado);

                mostrarNum.innerHTML = "";

                disabledButton();
            }
            else if(numeroSecreto != numeroDigitado)
            {
                if (numeroSecreto > numeroDigitado)
                {
                    resultado = document.getElementById("result");

                    resultado.innerHTML = ("Te equivocaste<br>El numero secreto es mayor que " +numeroDigitado);
                }
                else if(numeroSecreto < numeroDigitado)
                {
                    resultado = document.getElementById("result");

                    resultado.innerHTML = ("Te equivocaste<br>El numero secreto es menor que " +numeroDigitado);
                }

                numIntentos--;
                mostrarNum.innerHTML = numIntentos;
                document.getElementById("num").value = ("");
                
                if (numIntentos == 0)
                {
                    outOfAttemps.innerHTML = ("Se te acabaron los intentos...<br>El numero secreto era: " + numeroSecreto);            
                    
                    disabledButton();

                    resultado = document.getElementById("result");
                    resultado.innerHTML = "";
                }
            }
        }
    }
}while(numeroSecreto != numeroDigitado);
