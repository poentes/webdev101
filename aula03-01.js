

var butao = document.getElementById("calcBtn");


butao.addEventListener("click", function(){
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;
	var resultado = parseInt(n1) + parseInt(n2);

	console.log("A SOMA É: " + resultado);
});
