class LocaldeRopa {

    constructor(Nombre, Talle, Marca, Precio, Color) {
        this.Nombre = Nombre;
        this.Talle = Talle;
        this.Marca = Marca;
        this.Precio = Precio;
        this.Color = Color;
    }
}

let articulo1 = new LocaldeRopa(
    "pantalon",
    "S",
    "ADIDAS",
    "1500",
    "Azul"
)

let articulo2 = new LocaldeRopa(
    "Calza",
    "S",
    "ADIDAS",
    "2500",
    "Negro"
)
let articulo3 = new LocaldeRopa(
    "Calza",
    "M",
    "ADIDAS",
    "2800",
    "Amarillo"
)
let articulo4 = new LocaldeRopa(
    "REMERA",
    "M",
    "ADIDAS",
    "1500",
    "Negra"
)
let articulo5 = new LocaldeRopa(
    "Calza  ",
    "S",
    "ADIDAS",
    "2000",
    "Azul"
)
let articulo6 = new LocaldeRopa(
    "remera",
    "S",
    "ADIDAS",
    "1000",
    "Roja"
)
let articulo7 = new LocaldeRopa(
    "pantalon",
    "12",
    "ADIDAS",
    "1400",
    "Azul"
)

let ListaArticulos = []

ListaArticulos.push(articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7)
console.log("Lista")
console.log(ListaArticulos)


let ListaArticulosColor = ListaArticulos.filter(x => x.Color === "Azul")
console.log("Lista Azul")
console.log(ListaArticulosColor)




let ListaArticulosTalle = ListaArticulos.filter(x => x.Talle === "S")
console.log(ListaArticulosTalle)

let ListaArticulosVerdes = ListaArticulos.map(x => ({
    Color: "VERDE"
}))


console.log("Lista Mapeada")
console.log(ListaArticulosVerdes)



let ListaArticulosPrimero = ListaArticulos.find(x => x.Talle === "S")
console.log("Lista Primer S")
console.log(ListaArticulosPrimero)


let ListaArticuloPantalon = ListaArticulos.find(x => x.Nombre === "pantalon")
console.log("Lista Primer Pantalon")
console.log(ListaArticuloPantalon)


// Local de Ropa
// Tenemos una Lista de Productos (de 10 productos)
// Las propiedades que tienen estos productos son: Talle,Color,Tipo(ejemplo: Remera, Pantalon)
// Devolver una lista con los productos que sean de Color azul
// Devolver otra lista con los productos de Color rojo y talle xl
// Devolver otra lista con los productos pero todos de color verde
// Devolver el primer elemento que tiene talle S
// Devolver la posision del primer elemento que es del tipo Pantalon