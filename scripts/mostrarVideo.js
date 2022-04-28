import { data } from "../data/data.js";
import { mostrar } from "../modules/mostrarVideo.js";
import { recomendados } from "../modules/recomendados.js";

let contenedorVideo = document.getElementById('videoZone');
let recomodas = document.getElementById('recomenZone');
let videoSeleccionado = JSON.parse(localStorage.getItem('video'));
console.log(videoSeleccionado);

recomendados(recomodas,data);
mostrar(contenedorVideo,videoSeleccionado);
