const avanca = document.querySelector(".btn-proximo");

avanca.forEach(blutton=>{
    blutton.addEventListener("clink",function(){
        const atual =document.querySelector(."ativo");
        const proximopasso ="passo-" + this.getAttribute("data-proximo");

        atual.classList.remove("ativo");
        document.getElementById(proximopasso).classList.add("ativo");
    })

})