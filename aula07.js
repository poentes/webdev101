

function load()
{
	var btnModalSalvar = document.getElementById("btnModalSalvar");

	btnModalSalvar.addEventListener("click", function(){
		//console.log("Arquivo Salvo com Sucesso");
		var corpoTabela = document.getElementById("corpoTabela");


//  "<td><button class=\"btn btn-warning\">Editar</button>";
		// corpoTabela.innerHTML += "<button type=\"button\" name=\"btnExcluir\" data-toggle=\"modal\" data-target=\"#excluir\" class=\"btn btn-danger\">Exluir</button></td>";
		// corpoTabela.innerHTML += "</tr>";

		var inputNome = document.getElementById("inputNome").value;
		var inputIdade = document.getElementById("inputIdade").value;
		var inputCurso = document.getElementById("inputCurso").value;

		var tr = document.createElement("tr");
		var tdNome = document.createElement("td");
		tdNome.innerHTML = inputNome;
		var tdIdade = document.createElement("td");
		tdIdade.innerHTML = inputIdade;
		var tdCurso = document.createElement("td");
		tdCurso.innerHTML = inputCurso;
		var tdBotoes = document.createElement("td");
		var botaoEditar = document.createElement("button");
		$('#botaoEditar').addClass('dropdown-toggle');
 		$('#botaoEditar').attr('data-toggle','modal');
 		$('#botaoEditar').addClass('dropdown-target');
 		$('#botaoEditar').attr('data-target','#editar');
 		$('#botaoEditar').addClass('btn');
 		$('#botaoEditar').addClass('btn-warning');
 		botaoEditar.innerHTML = "Editar";
 		tdBotoes.appendChild(botaoEditar);
		tr.appendChild(tdNome);
		tr.appendChild(tdIdade);
		tr.appendChild(tdCurso); 
		tr.appendChild(tdBotoes);
		corpoTabela.appendChild(tr);
	});
}







document.addEventListener("DOMContentLoaded", load, false);