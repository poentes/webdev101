

function load()
{
	var btnModalSalvar = document.getElementById("btnModalSalvar");


	btnModalSalvar.addEventListener("click", function(){
		//console.log("Arquivo Salvo com Sucesso");
		var corpoTabela = document.getElementById("corpoTabela");

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
		var tdEditar = document.createElement("td");
		var tdExcluir = document.createElement("td");

		var botaoEditar = document.createElement("button");
		botaoEditar.setAttribute("data-toggle", "modal");
		botaoEditar.setAttribute("data-target", "#editar");
		botaoEditar.className += " btn btn-warning ";
		botaoEditar.innerHTML = "Editar";

		var botaoExcluir = document.createElement("button");
		botaoExcluir.setAttribute("data-toggle", "modal");
		botaoExcluir.setAttribute("data-target", "#excluir");
		botaoExcluir.className += " btn btn-danger";
		botaoExcluir.innerHTML = "Excluir";		

 		tdEditar.appendChild(botaoEditar);
 		tdExcluir.appendChild(botaoExcluir);
		tr.appendChild(tdNome);
		tr.appendChild(tdIdade);
		tr.appendChild(tdCurso); 
		tr.appendChild(tdEditar);
		tr.appendChild(tdExcluir);
		corpoTabela.appendChild(tr);

		$("#tabela").find('tbody')
			.append("<td>"+inputNome+"</td>")
			.append("<td>"+inputIdade+"</td>")
			.append("<td>"+inputCurso+"</td>")
		    .append("<td><button data-toggle='modal' data-target='#editar' class='btn btn-warning botoes'>Editar</button></td>")
		    .append("<td><button data-toggle='modal' data-target='#excluir' class='btn btn-danger'>Excluir</button></td>");
	});
}







document.addEventListener("DOMContentLoaded", load, false);