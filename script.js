function buscarResposta() {
    fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => {
            document.getElementById("words-space").innerHTML = data;
        });
}

function buscarRespostaUser() {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            document.getElementById("words-space").innerHTML = data;
        });
}