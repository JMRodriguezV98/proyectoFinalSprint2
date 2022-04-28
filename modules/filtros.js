let todos = document.getElementById("filtroTodos");
let musica = document.getElementById("filtroMusica");
let programacion = document.getElementById("filtroProgramacion");
let ux = document.getElementById("filtroUx");

export function filtroMusica( contenedor, array ){
    todos.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arreglo = array.filter(informacion => informacion.categoria != '');
        arreglo.forEach(( element ) => {
            const { poster, nombre, avatar, vistas, canal, fecha, id, categoria } = element;
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
    })

    musica.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arreglo = array.filter(informacion => informacion.categoria == 'musica');
        arreglo.forEach(( element ) => {
            const { poster, nombre, avatar, vistas, canal, fecha, id, categoria } = element;
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
    })

    programacion.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arreglo = array.filter(informacion => informacion.categoria == 'programacion');
        arreglo.forEach(( element ) => {
            const { poster, nombre, avatar, vistas, canal, fecha, id, categoria } = element;
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
    })

    ux.addEventListener( 'click', () => {
        contenedor.innerHTML = "";
        let arreglo = array.filter(informacion => informacion.categoria == 'ux');
        arreglo.forEach(( element ) => {
            const { poster, nombre, avatar, vistas, canal, fecha, id, categoria } = element;
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
    })
}