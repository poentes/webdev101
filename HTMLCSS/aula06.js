

function toCharArray(frase, parametro)
{
	return frase.split(parametro);
}


function substituirTudo(frase, palavra, substituicao)
{
	var regex = new RegExp(palavra, 'g');
	return frase.replace(regex, substituicao);
}

function substituirUm(frase, palavra, substituicao)
{
	return frase.replace(palavra, substituicao);
}

function mostrarData()
{
	var data = new Date();
	return "Data: " + data.toDateString() + ".";
}


function formulas(numero1, numero2)
{
	//var mensagem = "O valor em potência de " + numero1 + " e ";
	//mensagem += " " + numero2 + " é: " + Math.pow(numero1,numero2);
	
	var mensagem = " " + numero1 + " elevado a " + numero2 + " = " + numero1**numero2;

	var absoluto = Math.abs(numero1);

	//Piso
	var piso = Math.floor(numero2);
	//Teto
	var teto = Math.ceil(numero1);

	var maximo = Math.max(90, 2, 39, 0.001, 3, 69);

	var minimo = Math.min(90, 2, 39, 0.001, 3, 69);


	return mensagem;
}


function arredondar(numero)
{
	return Math.round(numero);
}


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
		var frase = document.getElementById("frase").value;
		//input1 = parseFloat(input1);
		//input2 = parseFloat(input2);

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

		var valor_arredondado = arredondar(input1);

		var mensagem = formulas(input1, input2);

		mensagem = mostrarData();

		mensagem = substituirUm(frase, input1, input2);

		mensagem = substituirTudo(frase, input1, input2);

		var variables = toCharArray(frase, input1);

		for(var i = 0; i < variables.length; i++)
		{
			console.log("Letra: " + variables[i] + "\n");
		}

		resposta.innerHTML = mensagem;

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