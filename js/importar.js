var botaoImportar = document.querySelector("#buscar-paciente");
botaoImportar.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    });
    xhr.send();
});
