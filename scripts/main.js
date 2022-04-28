import { data } from "../data/data.js";
import { filtroMusica } from "../modules/filtros.js";
import { mostrarVideo } from "../modules/mostrar.js";

let agregar = document.getElementById('agregar');
let container = document.getElementById("app");
let videoSeleccionado;

mostrarVideo( container, data );
filtroMusica( container, data );

agregar.addEventListener('click', () => {
    location.href = "./pages/agregar.html";
});

(function selecToVideo(){
    document.addEventListener('dblclick', ({ target }) => {
        if( target.classList.contains('poster')){
            let id = target.id;
            let video = data.find(item => item.id == id);
            console.log(video);
            videoSeleccionado = video;
            localStorage.setItem('video', JSON.stringify(videoSeleccionado));
            location.href = "./pages/videoSeleccionado.html";
        }
    });
})();