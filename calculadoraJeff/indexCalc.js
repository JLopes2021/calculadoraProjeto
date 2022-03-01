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
}function conversor(){
    var moeda = prompt("Qual a moeda atual? Digite o número correspondente. \n" + " 1 - Real \n" +" 2 - Dólar \n" + " 3 - Euro \n")
    if(moeda == 1){
        conversorRealDolar_Euro();
    }else if(moeda == 2){
        conversorDolarReal_Euro();
    } else if (moeda == 3){
        conversorEuroReal_Dolar();
    } else if (moeda >= 0 || moeda < 3){

    } else {
        document.getElementById('resultado').innerHTML = "Precisa por um número aqui..."
    }
}
function conversorRealDolar_Euro(){
        // Real em Dólar
        var conversora = prompt("Deseja converter em qual moeda?. \n" +"1 - Dólar \n" + " 2 - Euro \n")
        if(conversora == 1){
            var resultado = document.getElementById('resultado').innerHTML;
                    if(resultado)
                    {
                        document.getElementById('resultado').innerHTML = eval(resultado)* 0.19 + ' Dólares';
                    }
                    else
                    {
                        document.getElementById('resultado').innerHTML = "Precisa número aqui"
                    }
        //Real em Euro            
        }else if(conversora == 2){
            var resultado = document.getElementById('resultado').innerHTML;
                    if(resultado)
                    {
                        document.getElementById('resultado').innerHTML = (eval(resultado)* 0.17).toFixed(2) + ' Euros';
                    }
                    else
                    {
                        document.getElementById('resultado').innerHTML = "Precisa número aqui"
                    }
        }
}
function conversorDolarReal_Euro(){
    // Dólar em Real
    var conversora = prompt("Deseja converter em qual moeda?. \n" +"1 - Real \n" + " 2 - Euro \n")
    if(conversora == 1){
        var resultado = document.getElementById('resultado').innerHTML;
                if(resultado)
                {
                    document.getElementById('resultado').innerHTML = eval(resultado)* 5.16 + ' Reais';
                }
                else
                {
                    document.getElementById('resultado').innerHTML = "Precisa número aqui"
                }
    //Dólar em Euro            
    }else if(conversora == 2){
        var resultado = document.getElementById('resultado').innerHTML;
                if(resultado)
                {
                    document.getElementById('resultado').innerHTML = (eval(resultado)* 0.9).toFixed(2) + ' Euros';
                }
                else
                {
                    document.getElementById('resultado').innerHTML = "Precisa número aqui"
                }
    }
}
function conversorEuroReal_Dolar(){
    // Euro em Real
    var conversora = prompt("Deseja converter em qual moeda?. \n" +"1 - Real \n" + " 2 - Dólar \n")
    if(conversora == 1){
        var resultado = document.getElementById('resultado').innerHTML;
                if(resultado)
                {
                    document.getElementById('resultado').innerHTML = (eval(resultado)/ 0.17).toFixed(2) + ' Reais';
                }
                else
                {
                    document.getElementById('resultado').innerHTML = "Precisa número aqui"
                }
    //Euro em Dolar            
    }else if(conversora == 2){
        var resultado = document.getElementById('resultado').innerHTML;
                if(resultado)
                {
                    document.getElementById('resultado').innerHTML = (eval(resultado)/ 0.9).toFixed(2) + ' Dólares';
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
