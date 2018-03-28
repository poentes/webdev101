

$.ajax({
  url: "http://ivopontes.com.br/api/livros",
  type: "GET"
  dataType: "JSON",
  success: {
  	var paragrafo = document.getElmentById("meuParagrafo");

  	paragrafo.innerHMTL = response.data.alunos[0];
  }
});