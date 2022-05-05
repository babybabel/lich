document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").innerHTML = localStorage.getItem("name")

    let radios = document.querySelectorAll('.radio');
    for (var i = radios.length - 1; i >= 0; i--) {

        radios[i].addEventListener('change', function(){
            localStorage.setItem("choice",this.value)
        })


    }

})