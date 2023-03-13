$(document).ready(function() {

    var listaTarefa = $("#nova-tarefa");

    $("form").submit(function(event) {
        event.preventDefault();
        var nomeTarefa = $("#nome-tarefa").val();
        if (nomeTarefa !== "") {
            listaTarefa.append("<li>" + nomeTarefa + "</li>");
            $("#nome-tarefa").val("");
        }
    });

    listaTarefa.on("click", "li", function() {
        $(this).toggleClass("completed");
    })
});