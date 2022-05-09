document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#text").innerHTML = localStorage.getItem("choice4")

    let radios = document.querySelectorAll('.radio');
    for (var i = radios.length - 1; i >= 0; i--) {

        radios[i].addEventListener('change', function(){
            localStorage.setItem("choice5",this.value)
        })


    }

})
