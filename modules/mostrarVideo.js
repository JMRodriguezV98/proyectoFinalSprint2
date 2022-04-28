export function mostrar(contenedor, element){
    contenedor.innerHTML = "";
    const { poster } = element;
    const { nombre } = element;
    const { avatar } = element;
    const { vistas } = element;
    const { canal }  = element;
    const { fecha } = element;
    const { url } = element;
    const { id } = element;
    if( url != ""){
        contenedor.innerHTML += `<div class='content'>
                                <video id="${id}" class="videoSelecteed" src="${url}" controls></video>
                                <div class='info'>
                                    <img class='avatar' src="${avatar}">
                                    <div class="separ">
                                        <p class='name' >${nombre}</p>
                                        <p class='canal' >${canal}</p>
                                        <div class='canalInfo'>
                                            <p class='vistas' >${vistas}</p>
                                            <p class='vistas' >${fecha}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
    }else{
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
    }
}