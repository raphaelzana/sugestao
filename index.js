var LandingPage = (function () {


    var form = document.querySelector("#careStoreSubmit");

    function init() {
        initEvents();
    }

    function initEvents() {

        form.addEventListener("submit", onSubmit);
    }

    function onSubmit(e) {
        console.log(this);
        e.preventDefault();
        // var campoNome = document.querySelector("#name");
        // var campoEmail = document.querySelector("#email");
        // var campoSugestao = document.querySelector("#sugestao");
        
        var arr = document.querySelectorAll('.input');


        var podeEnviar = isNotEmpty(arr);

        if (podeEnviar) {
            this.submit();
        }
    }

    function isNotEmpty(fields) {
        var podeEnviar = true;
        fields.forEach(function (e) {
            if (e.value.length === 0) {
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

    return {
        init
    }

})();


document.addEventListener("DOMContentLoaded", LandingPage.init);