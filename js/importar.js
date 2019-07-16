var botaoImportar = document.querySelector("#buscar-paciente");
botaoImportar.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes2");
    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log("Error: " + xhr.status);
            var errorAjax = document.querySelector("#error-ajax");
            errorAjax.classList.remove("invisivel");            
        }
    });
    xhr.send();
});