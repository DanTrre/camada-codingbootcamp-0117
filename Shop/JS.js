class Productos {

    constructor(Nombre, Descipcion, Marca, Precio, imgSrc) {
        this.Nombre = Nombre;
        this.Descipcion = Descipcion;
        this.Marca = Marca;
        this.Precio = Precio;
        this.imgSrc = imgSrc;

    }
}
let articulo1 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(1).jpeg"
)

let articulo2 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(2).jpeg"
)
let articulo3 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(3).jpeg"
)
let articulo4 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(4).jpeg"
)
let articulo5 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(5).jpeg"
)
let articulo6 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(6).jpeg"
)
let articulo7 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(7).jpeg"
)
let articulo8 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(8).jpeg"
)
let articulo9 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(9).jpeg"
)
let articulo10 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(10).jpeg"
)
let articulo11 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(11).jpeg"
)
let articulo12 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(12).jpeg"
)
let articulo13 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(13).jpeg"
)
let articulo14 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(14).jpeg"
)
let articulo15 = new Productos(
    "Nombre",
    "Descripcion",
    "Marca",
    "10 USD",
    "Producto-(15).jpeg"
)

let ListaArticulos = []

ListaArticulos.push(articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9, articulo10, articulo11, articulo12, articulo13, articulo13, articulo14, articulo15)
console.log("Lista")
console.log(ListaArticulos)


{
    /* <div class="card">
    <img src="./Imag/Shop/Producto-(1).jpeg" class="img-card" alt="">
    <div class="Texto">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam quae temporibus libero, earum reiciendis ex. Quod aperiam illum, numquam deleniti accusamus eos quibusdam voluptatum earum eveniet rerum, modi velit!</p>
    </div>
    <button class="BotonComprar">Compar</button>
    </div>  */
}


ListaArticulos.forEach(x => {
    CreateCards(x)
})


function CreateCards(Productos) {
    let ContenedorProductos = document.getElementById("ContenedorProductos")
    console.log(ContenedorProductos)

    let div_card = document.createElement("div")
    div_card.classList.add("card")
    let img_card = document.createElement("img")
    img_card.classList.add("img-card")
    img_card.src = "./Shop/" + Productos.imgSrc
    div_card.appendChild(img_card)
    let div_tex = document.createElement("div")
    div_tex.classList.add("Texto")
    div_card.appendChild(div_tex)
    let p_card = document.createElement("p")
    p_card.textContent = Productos.Nombre + " " + Productos.Marca + " " + Productos.Descipcion + " " + Productos.Precio
    div_card.appendChild(p_card)
    let button_card = document.createElement("button")
    button_card.classList.add("BotonComprar")
    button_card.textContent = "Comprar"
    div_card.appendChild(button_card)
    ContenedorProductos.appendChild(div_card)
}