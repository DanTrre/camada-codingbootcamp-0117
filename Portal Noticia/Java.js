class Noticias {
    constructor(Titulo, Descripcion, imgSrc, url) {
        this.Titulo = Titulo;
        this.Descripcion = Descripcion;
        this.imgSrc = imgSrc;
        this.url = url

    }
}


let Noticia1 = new Noticias(
    "GPT-3: el impacto económico de la tecnología que se está comiendo el mundo",
    "¿Cómo saber si esta columna fue escrita por un ser humano o generada por un programa de computación? ¿Hay un periodista de carne y hueso detrás de los párrafos que siguen o un modelo de lenguaje natural ya se hizo cargo de este espacio, luego de aprender de miles de notas anteriores?",
    "Noticia1.jpg",
    "https://www.lanacion.com.ar/economia/gpt-3-el-impacto-economico-de-la-tecnologia-que-se-esta-comiendo-el-mundoc-nid2409609"

)

let Noticia2 = new Noticias(
    "OnePlus Nord: ya es oficial el smartphone que lleva el 5G a un precio accesible",
    "OnePlus ha hecho oficial su nueva familia de smartphones Nord, después de anunciarla a finales de junio, con un primer dispositivo que incorpora una cámara múltiple liderada por un sensor de 48 megapixeles y una fluidez propia de los modelos premium de la marca.",
    "Noticia2.jpg",
    "https://www.lanacion.com.ar/tecnologia/oneplus-nord-es-oficial-smartphone-lleva-5g-nid2401531"
)
let Noticia3 = new Noticias(
    "AMD presentó su nueva línea de procesadores Ryzen 4000 para computadoras portátiles",
    "AMD anunció el lanzamiento de su línea de procesadores Ryzen 4000 para computadoras portátiles, con un diseño en 7 nanómetros y basado en la plataforma Zen 2",
    "Noticia3.jpg",
    "https://www.lanacion.com.ar/tecnologia/amd-presento-su-nueva-linea-procesadores-ryzen-nid2402339"
)
let Noticia4 = new Noticias(
    "Una docena de gracias: crean un sitio para celebrar el día del administrador de sistemas",
    "La comunidad de profesionales de sistemas sysarmy creó el sitio Una docena de gracias para celebrar el día del administrador de sistemas",
    "Noticia4.jpg",
    "https://www.lanacion.com.ar/tecnologia/una-docena-gracias-crean-sitio-celebrar-dia-nid2408534"
)
let Noticia5 = new Noticias(
    "Las tabletas iPad de Apple fueron los equipos más demandados durante la pandemia de coronavirus",
    "De esta forma, la compañía liderada por Tim Cook registró un crecimiento interanual del 12,3 por ciento. El iPad de 10,2 pulgadas fue el éxito de ventas de Apple debido a un precio accesible",
    "Noticia5.jpg",
    "https://www.lanacion.com.ar/tecnologia/las-tabletas-ipad-apple-fueron-equipos-mas-nid2411625"
)

let listaNoticaias = []

listaNoticaias.push(Noticia1, Noticia2, Noticia3, Noticia4, Noticia5)
console.log("Lista de Noticias")
console.log(listaNoticaias)


listaNoticaias.forEach(x => {
    TodasLasNoticias(x)
})







function TodasLasNoticias(Noticias) {
    let Contenedor_Noticas = document.getElementById("Contenedor-Noticas")
    console.log(Contenedor_Noticas)

    let div_card = document.createElement("div")
    div_card.classList.add("card")


    let a_card = document.createElement("a")
    a_card.href = Noticias.url

    div_card.appendChild(a_card)



    fetch("https://source.unsplash.com/user/erondu/1600x900", {})
        .then(function(response) {
            let img_card = document.createElement("img")
            img_card.classList.add("img-Noticia")
            img_card.src = response.url
            a_card.appendChild(img_card)


            /*  let img_card = document.createElement("img")
             img_card.classList.add("img-Noticia")
             img_card.src = "./img/" + Noticias.imgSrc
             a_card.appendChild(img_card) */

            let h2_card = document.createElement("h2")
            h2_card.textContent = Noticias.Titulo
            div_card.appendChild(h2_card)
            a_card.appendChild(h2_card)

            let p_card = document.createElement("p")
            p_card.classList.add("Texto")
            p_card.textContent = Noticias.Descripcion
            div_card.appendChild(p_card)

        })

    Contenedor_Noticas.appendChild(div_card)

}