document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#careStoreSubmit").addEventListener("submit",function(e){
        e.preventDefault();
        var campoNome = document.querySelector("#name");
        var campoEmail = document.querySelector("#email");
        var campoSugestao = document.querySelector("#sugestao");
        var campos = [campoNome, campoEmail, campoSugestao];

        var podeEnviar = isNotEmpty(campos);

        if(podeEnviar){
            this.submit();
        }
    });
});

function isNotEmpty(campos) {
    var podeEnviar = true;
    campos.forEach(function(e){
        if(e.value.length === 0){
            console.error("Campo " + e.id + "Vazio");
            e.classList.add('formu');
            podeEnviar = false;
            return;
        }
        else {
            e.classList.remove('formu');
        }
    });
    return podeEnviar;
}