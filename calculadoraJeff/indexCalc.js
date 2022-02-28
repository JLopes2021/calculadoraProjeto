function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
function conversor(){
    
    var moeda = prompt("Qual a moeda atual? Digite o número correspondente. \n" + " 1 - Real \n" +" 2 - Dólar \n" + " 2 - Euro \n")
    var conversora = prompt("Deseja converter em qual moeda?. \n" +"1 - Dólar \n" + " 2 - Euro \n")
    if (moeda == 1 && conversora ==1){
            var resultado = document.getElementById('resultado').innerHTML;
                    if(resultado)
                    {
                        document.getElementById('resultado').innerHTML = eval(resultado)* 0.19 + ' Dólares';
                    }
                    else
                    {
                        document.getElementById('resultado').innerHTML = "Precisa número aqui"
                    }
        }
        if (moeda == 1 && conversora ==2){
            var resultado = document.getElementById('resultado').innerHTML;
                    if(resultado)
                    {
                        document.getElementById('resultado').innerHTML = eval(resultado)* 0.17 + ' Euros';
                    }
                    else
                    {
                        document.getElementById('resultado').innerHTML = "Precisa número aqui"
                    }
        }
        if (moeda == 2 && conversora == 1){
            if(resultado)
            {
                document.getElementById('resultado').innerHTML = eval(resultado)/ 0.19 + ' Reais';
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Precisa número aqui"
            }
        }

}

function ajuda(){
    window.open("ajuda.html")
}
