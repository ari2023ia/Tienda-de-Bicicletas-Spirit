const aro29 = [
    { marca: "Best Savage",
        precio: "Precio: 1.700.000 gs.", 
        contado: "1.700.000 gs.", 
        img1: "./bestsavage.jpeg", 
        img2: "./best-savage.jpeg", 
        img3: "./bici-best-savage.jpeg", 
        img4: "./best.jpeg", 
        suspension: "Con suspensión delantera", 
        velocidades: "Cambios: 8x3 velocidades",  
        material: "Metal: Aluminio",
        aro: "29",
        de: "de Aluminio"
    },
];
const aro275 = [
    { marca: "Scott",
        precio: "Precio: 1.300.000 gs.", 
        contado: "1.500.000 gs.", 
        img1: "./gt-26-rojo3.jpg", 
        img2: "./gt-26-rojo4.jpg", 
        img3: "./gt-26-rojo5.jpg",
        img4: "./gt-26-rojo2.jpg",
        img5: "./gt-26-rojo.jpeg", 
        suspension: "Con suspensión delantera", 
        velocidades: "Cambios: 8x3 velocidades", 
        material: "Metal: Aluminio",
        aro: "27,5",
        de: "de Aluminio"
    },
];
const aro26 = [
    { marca: "Scott",
        precio: "Precio: 1.100.000 gs.", 
        contado: "1.100.000 gs.", 
        img1: "./gt-26-rojo3.jpg", 
        img2: "./gt-26-rojo4.jpg", 
        img3: "./gt-26-rojo5.jpg",
        img4: "./gt-26-rojo2.jpg",
        img5: "./gt-26-rojo.jpeg", 
        suspension: "Con suspensión delantera", 
        velocidades: "Cambios: 8x3 velocidades", 
        material: "Metal: Aluminio",
        aro: "26",
        de: "de Aluminio"
    },
];
const txtaro = document.getElementById("txtaro");
const carrusel = document.getElementById('carrusel');
let q = 0;
// Cargar los ítems al inicio
aro29.forEach((item, index) => {    
    let aro = `<h4>Aros 29 disponibles:</h4>`; 
    txtaro.innerHTML = aro;
    let contador = 0;
    for (let key in item) {
        if (key.startsWith('img')) {
            contador++;
        }
    }

    const bicis = document.createElement('div');
    bicis.classList.add('item');

    bicis.innerHTML = `
        <div class="item-body">
            <h2>${item.marca}</h2>
            <div  class="imageng" style="width:300px; height:225px; margin-bottom: 12px;">
            <img class="img-principal" src="./imgs/${item.img1}" style="transition: transform 0.2s ease; border-radius: 4px; object-fit: contain; width: 100%; height: 100%; user-select: none;">
            </div>
            <div class="imagenes" style="width:50px; height:auto; display:flex; gap: 5px;">
            </div>
            <div class="item-description">
                <p style="margin-top: 8px;">${item.precio}</p>
                <p>${item.material}</p>            
                <p>${item.velocidades}</p>
                <p>${item.suspension}</p>
                <button class="comprar" style="color: wheat; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; margin-top:8px; margin-bottom: -4px; padding: 10px 20px; border-radius: 5px; cursor: pointer; background: #9e0505e1; transition: transform 0.2s ease; border:  1px solid 87CEEB;" onclick="abrirdetalles29(${index})">Comprar</button>
            </div>
        </div>
    `;

    const imagenesContainer = bicis.querySelector('.imagenes');

    for (let i = 1; i <= contador; i++) {
        const imgKey = `img${i}`;
        const imgSrc = item[imgKey];
        if (imgSrc) {
            const miniImg = document.createElement('img');
            miniImg.src = `./imgs/${imgSrc}`;
            miniImg.classList.add("miniimagenes");
            miniImg.style.width = '50px';
            miniImg.style.height = '37.5px';
            miniImg.style.pointerEvents = 'auto';
            miniImg.style.cursor = 'pointer';
            miniImg.style.borderRadius = '4px';
            miniImg.style.transition = 'transform 0.2s ease';
            miniImg.addEventListener('click', () => {
                const imgPrincipal = bicis.querySelector('.img-principal');
                if (imgPrincipal) {
                    imgPrincipal.src = `./imgs/${imgSrc}` + '?v=' + new Date().getTime();
                }
            });

            imagenesContainer.appendChild(miniImg);
        }
    }

    carrusel.appendChild(bicis);
});

const modal = document.getElementById('modal');
function abrirdetalles29(indice) {
    console.log(aro29[indice]);
    modal.style.display = 'block';
    document.getElementById('fondoOscuro').style.background = 'rgba(0,0,0,0.5)';
    let bicielegida = `<h3> Elegiste la ${aro29[indice].marca} lista para pasear, a ${aro29[indice].contado}</h3>
    <img src="./imgs/${aro29[indice].img1}" style="width:250px; height:auto;">
    <br>
    <p>Aro ${aro29[indice].aro}, ${aro29[indice].de}, frenos funcionando, ${aro29[indice].velocidades}<p/>
    <h3>Elige un asesor para completar la compra</h3>
        <button onclick="asesor1bici29(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease;">Marco Almada</button>
        <button onclick="asesor2bici29(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 8px;">Ramon Meza</button>
        <button onclick="asesor3bici29(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 8px;">Ariel Almada</button>
    <br>
    <button onclick="cerrarModal()" class="compmod" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#9e0505e1; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 12px;">Cancelar</button>
    `
    modal.innerHTML = '';
    modal.innerHTML += bicielegida;
}
function abrirdetalles275(indice) {
    console.log(aro275[indice]);
    modal.style.display = 'block';
    document.getElementById('fondoOscuro').style.background = 'rgba(0,0,0,0.5)';
    let bicielegida = `<h3> Elegiste la ${aro275[indice].marca} lista para pasear, a ${aro275[indice].contado}</h3>
    <img src="./imgs/${aro275[indice].img1}" style="width:250px; height:auto;">
    <br>
    <p>Aro ${aro275[indice].aro}, ${aro275[indice].de}, frenos funcionando, ${aro275[indice].velocidades}<p/>
    <h3>Elige un asesor para completar la compra</h3>
        <button onclick="asesor1bici275(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease;">Marco Almada</button>
        <button onclick="asesor2bici275(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 8px;">Ramon Meza</button>
        <button onclick="asesor3bici275(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 8px;">Ariel Almada</button>
    <br>
    <button onclick="cerrarModal()" class="compmod" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#9e0505e1; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 12px;">Cancelar</button>
    `
    modal.innerHTML = '';
    modal.innerHTML += bicielegida;
}
function abrirdetalles26(indice) {
    console.log(aro26[indice]);
    modal.style.display = 'block';
    document.getElementById('fondoOscuro').style.background = 'rgba(0,0,0,0.5)';
    let bicielegida = `<h3> Elegiste la ${aro26[indice].marca} lista para pasear, a ${aro26[indice].contado}</h3>
    <img src="./imgs/${aro26[indice].img1}" style="width:250px; height:auto;">
    <br>
    <p>Aro ${aro26[indice].aro}, ${aro26[indice].de}, frenos funcionando, ${aro26[indice].velocidades}<p/>
    <h3>Elige un asesor para completar la compra</h3>
        <button onclick="asesor1bici26(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease;">Marco Almada</button>
        <button onclick="asesor2bici26(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 8px;">Ramon Meza</button>
        <button onclick="asesor3bici26(${indice})" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#183a5b; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 8px;">Ariel Almada</button>
    <br>
    <button onclick="cerrarModal()" class="compmod" style="padding: 10px 20px; border: 1px solid 87CEEB; background:#9e0505e1; color: wheat; border-radius: 5px; cursor: pointer; margin-left: 10px; font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; transition: transform 0.2s ease; margin-top: 12px;">Cancelar</button>
    `
    modal.innerHTML = '';
    modal.innerHTML += bicielegida;
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('fondoOscuro').style.background= 'rgba(0, 0, 0, 0)';
}
function abrirModal2() {
    document.getElementById('modal2').style.display = 'block';
    document.getElementById('fondoOscuro').style.background = 'rgba(0,0,0,0.5)';
}
function cerrarModal2() {
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('fondoOscuro').style.background= 'rgba(0, 0, 0, 0)';
}

/* Drag manual */
let isDown = false;
let startX;
let scrollLeft;
carrusel.addEventListener('mousedown', (e) => {
    isDown = true;
    carrusel.classList.add('active');
    startX = e.pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
});
carrusel.addEventListener('mouseleave', () => {
    isDown = false;
    carrusel.classList.remove('active');
});
carrusel.addEventListener('mouseup', () => {
    isDown = false;
    carrusel.classList.remove('active');
});
carrusel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 2;
    carrusel.scrollLeft = scrollLeft - walk;
});

function aro29carrusel() {
    let aro = `<h4>Aros 29 disponibles: </h4>`;
    txtaro.innerHTML = aro;
    carrusel.innerHTML = '';
    aro29.forEach((item, index) => {
        let contador = 0;
        for (let key in item) {
            if (key.startsWith('img')) {
                contador++;
            }
        }
    
        const bicis = document.createElement('div');
        bicis.classList.add('item');
    
        bicis.innerHTML = `
            <div class="item-body">
                <h2>${item.marca}</h2>
                <div style="width:300px; height:225px; margin-bottom: 12px;">
                <img class="img-principal" src="./imgs/${item.img1}" style="transition: transform 0.2s ease; border-radius: 4px; object-fit: contain; width: 100%; height: 100%; user-select: none;">
                </div>
                <div class="imagenes" style="width:50px; height:auto; display:flex; gap: 5px;">
                </div>
                <div class="item-description">
                    <p>${item.precio}</p>
                    <p>${item.material}</p>            
                    <p>${item.velocidades}</p>
                    <p>${item.suspension}</p>
                    <button class="comprar" style="font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; margin-top:8px; margin-bottom: -4px; padding: 10px 20px; border-radius: 5px; cursor: pointer; background: #9e0505e1; transition: transform 0.2s ease; border: 1px solid 87CEEB; color: wheat;" onclick="abrirdetalles29(${index})">Comprar</button>
                </div>
            </div>
        `;
    
        const imagenesContainer = bicis.querySelector('.imagenes');
        for (let i = 1; i <= contador; i++) {
            const imgKey = `img${i}`;
            const imgSrc = item[imgKey];
            console.log(imgSrc);
            if (imgSrc) {
                const miniImg = document.createElement('img');
                miniImg.src = `./imgs/${imgSrc}`;
                miniImg.style.width = '50px';
                miniImg.style.height = '37.5px';
                miniImg.style.pointerEvents = 'auto';
                miniImg.style.cursor = 'pointer';
                miniImg.style.borderRadius = '4px';
                miniImg.classList.add("miniimagenes");
                miniImg.style.transition = 'transform 0.2s ease';
                miniImg.addEventListener('click', () => {
                    const imgPrincipal = bicis.querySelector('.img-principal');
                    if (imgPrincipal) {
                        imgPrincipal.src = `./imgs/${imgSrc}` + '?v=' + new Date().getTime();
                    }
                });
    
                imagenesContainer.appendChild(miniImg);
            }
        }
    
        carrusel.appendChild(bicis);
    });
}

function aro275carrusel() {
    let aro = `<h4>Aros 27,5 dispoonibles: </h4>`;
    txtaro.innerHTML = aro;
    carrusel.innerHTML = '';
    aro275.forEach((item, index) => {
        let contador = 0;
        for (let key in item) {
            if (key.startsWith('img')) {
                contador++;
            }
        }
    
        const bicis = document.createElement('div');
        bicis.classList.add('item');
    
        bicis.innerHTML = `
            <div class="item-body">
                <h2>${item.marca}</h2>
                <div style="width:300px; height:225px; margin-bottom: 12px;">
                <img class="img-principal" src="./imgs/${item.img1}" style="transition: transform 0.2s ease; border-radius: 4px; object-fit: contain; width: 100%; height: 100%; user-select: none;">
                </div>
                <div class="imagenes" style="width:50px; height:auto; display:flex; gap: 5px;">
                </div>
                <div class="item-description">
                    <p>${item.precio}</p>
                    <p>${item.material}</p>            
                    <p>${item.velocidades}</p>
                    <p>${item.suspension}</p>
                    <button class="comprar" style="font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; margin-top:8px; margin-bottom: -4px; padding: 10px 20px; border-radius: 5px; cursor: pointer; background: #9e0505e1; transition: transform 0.2s ease; border: 1px solid 87CEEB; color: wheat;" onclick="abrirdetalles275(${index})">Comprar</button>
                </div>
            </div>
        `;
    
        const imagenesContainer = bicis.querySelector('.imagenes');
        for (let i = 1; i <= contador; i++) {
            const imgKey = `img${i}`;
            const imgSrc = item[imgKey];
            if (imgSrc) {
                const miniImg = document.createElement('img');
                miniImg.src = `./imgs/${imgSrc}`;
                miniImg.style.width = '50px';
                miniImg.style.height = '37.5px';
                miniImg.style.pointerEvents = 'auto';
                miniImg.style.cursor = 'pointer';
                miniImg.style.borderRadius = '4px';
                miniImg.classList.add("miniimagenes");
                miniImg.style.transition = 'transform 0.2s ease';
                miniImg.addEventListener('click', () => {
                    const imgPrincipal = bicis.querySelector('.img-principal');
                    if (imgPrincipal) {
                        imgPrincipal.src = `./imgs/${imgSrc}` + '?v=' + new Date().getTime();
                    }
                });
    
                imagenesContainer.appendChild(miniImg);
            }
        }
    
        carrusel.appendChild(bicis);
    });
}

function aro26carrusel() {
    let aro = `<h4> Aros 26 dispoonibles: </h4>`;
    txtaro.innerHTML = aro;
    carrusel.innerHTML = '';
    aro26.forEach((item, index) => {
        let contador = 0;
        for (let key in item) {
            if (key.startsWith('img')) {
                contador++;
            }
        }
    
        const bicis = document.createElement('div');
        bicis.classList.add('item');
    
        bicis.innerHTML = `
            <div class="item-body">
                <h2>${item.marca}</h2>
                <div style="width:300px; height:225px; margin-bottom: 12px;">
                <img class="img-principal" src="./imgs/${item.img1}" style="transition: transform 0.2s ease; border-radius: 4px; object-fit: contain; width: 100%; height: 100%; user-select: none;">
                </div>
                <div class="imagenes" style="width:50px; height:auto; display:flex; gap: 5px;">
                </div>
                <div class="item-description">
                    <p>${item.precio}</p>
                    <p>${item.material}</p>            
                    <p>${item.velocidades}</p>
                    <p>${item.suspension}</p>
                    <button class="comprar" style="font-family: 'Poppins', sans-serif; font-weight: 700; font-style: italic; margin-top:8px; margin-bottom: -4px; padding: 10px 20px; border-radius: 5px; cursor: pointer; background: #9e0505e1; transition: transform 0.2s ease; border: 1px solid 87CEEB; color: wheat;" onclick="abrirdetalles26(${index})">Comprar</button>
                </div>
            </div>
        `;
    
        const imagenesContainer = bicis.querySelector('.imagenes');
        for (let i = 1; i <= contador; i++) {
            const imgKey = `img${i}`;
            const imgSrc = item[imgKey];
            if (imgSrc) {
                const miniImg = document.createElement('img');
                miniImg.src = `./imgs/${imgSrc}`;
                miniImg.style.width = '50px';
                miniImg.style.height = '37.5px';
                miniImg.style.pointerEvents = 'auto';
                miniImg.style.cursor = 'pointer';
                miniImg.style.borderRadius = '4px';
                miniImg.classList.add("miniimagenes");
                miniImg.style.transition = 'transform 0.2s ease';
                miniImg.addEventListener('click', () => {
                    const imgPrincipal = bicis.querySelector('.img-principal');
                    if (imgPrincipal) {
                        imgPrincipal.src = `./imgs/${imgSrc}` + '?v=' + new Date().getTime();
                    }
                });
    
                imagenesContainer.appendChild(miniImg);
            }
        }
    
        carrusel.appendChild(bicis);
    });
}

function asesor1bici29(indice) {
    window.open(`https://wa.me/595983448780?text=Hola%20Marco,%20quiero%20reservar%20la%20bicicleta%20${aro29[indice].marca}%20aro%20${aro29[indice].aro}%20lista%20para%20pasear%20a%20${aro29[indice].contado}`);
}
function asesor2bici29(indice) {
    window.open(`https://wa.me/595985288213?text=Hola%20Ramon,%20quiero%20reservar%20la%20bicicleta%20${aro29[indice].marca}%20aro%20${aro29[indice].aro}%20lista%20para%20pasear%20a%20${aro29[indice].contado}`);
}
function asesor3bici29(indice) {
    window.open(`https://wa.me/595982759024?text=Hola%20Ariel,%20quiero%20reservar%20la%20bicicleta%20${aro29[indice].marca}%20aro%20${aro29[indice].aro}%20lista%20para%20pasear%20a%20${aro29[indice].contado}`);
}

function asesor1bici275(indice) {
    window.open(`https://wa.me/595983448780?text=Hola%20Marco,%20quiero%20reservar%20la%20bicicleta%20${aro275[indice].marca}%20aro%20${aro275[indice].aro}%20lista%20para%20pasear%20a%20${aro275[indice].contado}`);
}
function asesor2bici275(indice) {
    window.open(`https://wa.me/595985288213?text=Hola%20Ramon,%20quiero%20reservar%20la%20bicicleta%20${aro275[indice].marca}%20aro%20${aro275[indice].aro}%20lista%20para%20pasear%20a%20${aro275[indice].contado}`);
}
function asesor3bici275(indice) {
    window.open(`https://wa.me/595982759024?text=Hola%20Ariel,%20quiero%20reservar%20la%20bicicleta%20${aro275[indice].marca}%20aro%20${aro275[indice].aro}%20lista%20para%20pasear%20a%20${aro275[indice].contado}`);
}

function asesor1bici26(indice) {
    window.open(`https://wa.me/595983448780?text=Hola%20Marco,%20quiero%20reservar%20la%20bicicleta%20${aro26[indice].marca}%20aro%20${aro26[indice].aro}%20lista%20para%20pasear%20a%20${aro26[indice].contado}`);
}
function asesor2bici26(indice) {
    window.open(`https://wa.me/595985288213?text=Hola%20Ramon,%20quiero%20reservar%20la%20bicicleta%20${aro26[indice].marca}%20aro%20${aro26[indice].aro}%20lista%20para%20pasear%20a%20${aro26[indice].contado}`);
}
function asesor3bici26(indice) {
    window.open(`https://wa.me/595982759024?text=Hola%20Ariel,%20quiero%20reservar%20la%20bicicleta%20${aro26[indice].marca}%20aro%20${aro26[indice].aro}%20lista%20para%20pasear%20a%20${aro26[indice].contado}`);
}