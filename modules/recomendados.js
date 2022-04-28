export function recomendados(contenedor, array){
    contenedor.innerHTML = "";
    array.forEach(( element ) => {
        const { poster } = element;
        const { nombre } = element;
        const { avatar } = element;
        const { vistas } = element;
        const { canal }  = element;
        const { fecha } = element;
        const { id } = element;
        contenedor.innerHTML += `<div class='contentR'>
                                    <img id=${id} class='posterR'src="${poster}">
                                    <div class='contento'>
                                        <div class='nombre'>${nombre}</div>
                                        <div class='infos'>
                                            <div class='canalR'>${canal}</div>
                                            <div class='fechaR'>${fecha}</div>
                                        </div>
                                    </div>
                                 </div>`
    })
}