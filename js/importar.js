var botaoImportar = document.querySelector("#buscar-paciente");
botaoImportar.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var pacientes = JSON.parse(xhr.responseText);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    });
    xhr.send();
});
