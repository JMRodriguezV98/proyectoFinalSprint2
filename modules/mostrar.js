export function mostrarVideo(contenedor, array){
    contenedor.innerHTML = "";
    array.forEach(( element ) => {
        const { poster } = element;
        const { nombre } = element;
        const { avatar } = element;
        const { vistas } = element;
        const { canal }  = element;
        const { fecha } = element;
        const { id } = element;
        contenedor.innerHTML += `<div class='content'>
                                    <img id=${id} class='poster'src="${poster}">
                                    <div class='info'>
                                        <img class='avatar' src="${avatar}">
                                        <div>
                                            <p class='name' >${nombre}</p>
                                            <p class='canal' >${canal}</p>
                                            <div class='canalInfo'>
                                                <p class='vistas' >${vistas}</p>
                                                <p class='vistas' >${fecha}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
    })
}