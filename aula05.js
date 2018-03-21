
function dividir(v1, v2)
{
	if(v2 !== 0)
	{
		return v1 / v2;
	}
}


function somar(v1, v2)
{
	return v1 + v2;
}


function load()
{
	//console.log("Caregou!!!");
	var butao = document.getElementById("butao");

	butao.addEventListener("click",function(){
		var input1 = document.getElementById("valor1").value;
		var input2 = document.getElementById("valor2").value;

		input1 = parseFloat(input1);
		input2 = parseFloat(input2);

		var resposta = document.getElementById("resposta");

		//resposta.innerHTML = somar(input1, input2);
		resposta.innerHTML = dividir(input1, input2);

		//Vamos mexer com substrings
		var python = "Eric6 e Spyder3 são IDEs para Python";

		var ide = python.slice(8,14);
		//resposta.innerHTML = ide;
		var hexadecimal = "Esse valor é hexadecimal: " + input1.toString(16);
		var binario = "Esse valor é binario: " + input1.toString(2);
		var octal = "Esse valor é octal: " + input1.toString(8);

		resposta.innerHTML = octal;

		//console.log("Valor1: " + input1 + "\nValor2: " + input2);
	});

	var banner = document.getElementById("banner");

	banner.addEventListener("mouseover", function(){
		//alert("VOCÊ ESTÁ NO BANNER!!!");
	});
/*
	var input1 = document.getElementById("valor1");

	input1.addEventListener("keydown", function(e){
		var esc = e.keyCode;

		if( esc == 27) // 27 botão ESC
		{
			alert("BOTÃO ESC PRESSIONADO!!!");
		}
	});*/


}







document.addEventListener("DOMContentLoaded", load, false);