document.addEventListener("DOMContentLoaded", (e) => {

    let button = document.querySelector(".layout__menu--toogle");
    let icon_bars = document.querySelector(".layout__menu--toogle .fa-bars");
    let icon_xmark = document.querySelector(".layout__menu--toogle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", (e) => {

        let visible = document.querySelector(".layout__aside--visible");

        if (!visible){
            aside.classList.add("layout__aside--visible")
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;
        }else{
            aside.classList.remove("layout__aside--visible")
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }

        /* EVENTO RESIZE: para que el menu no quede abierto por defecto */
    });

    window.addEventListener("resize", (e) => {

        let size = parseInt(document.body.clientWidth); /* CLIENTWIDHT eso con un console.log en la consola te tira los PX de cuadno vamos reduciendo la ventana de windows */

        if(size <= 1060){
            aside.classList.remove("layout__aside--visible")
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }

    })

})