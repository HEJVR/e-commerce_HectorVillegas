class Productos {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo,
            this.detalle = detalle,
            this.precio = precio,
            this.stock = stock,
            this.imagen = imagen
    }
}

const producto1 = new Productos("Mercedes - AMG SL63", "año - 2021", "$183.000 dólares", "2 y uno es mio", "https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-amg-sl63-s-e-performance-122-66a3f18ce1513.jpg?crop=0.824xw:0.927xh;0.117xw,0.0171xh&resize=768:*")

const producto2 = new Productos("Ferrari - SF90 Stradale", "año - 2024", "$625.000 dólares", "compra uno y lleva un pokemon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2a_OxTMx3c-WroBQ9_EhREKI9US2EWwBRfw&s")

const producto3 = new Productos("Lamborghini - Aventador SVJ", "año - 2023", "$517.000 dólares", "1 y segundo es gratis", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoRfm9V7kUBOReFk7MWKO4lC7uocrXVz2pA&s")

const producto4 = new Productos("Porsche - 911 Turbo S", "año - 2024", "$231.700 dólares", "1 con sorprecita", "https://cdn.motor1.com/images/mgl/KNrk1/s3/lanzamiento-porsche-911-turbo-s-exclusive-series.jpg")

const producto5 = new Productos("Bentley - Continental GT Speed", "año - 2024", "$280.225 dólares", "1 a 84 cuotas", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyR9rnYBzF5cVqcdwOc3kVVBCL4jg9D-svg&s")

const producto6 = new Productos("Rolls-Royce - Phantom", "año - 2024", "$460.000 dólares", "3 y un beso de messi", "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/49582/2018-rolls-royce-phantom-viii-135.jpg?crop=1xw:1.0xh;center,top&resize=1200:*")

// console.log(producto1);


let array = []
array.push(`
    <div class="card">
        <div class="card_content">
            <div class="img_car">
                <img src="${producto1.imagen}" alt="imagen carro">
            </div>
            <div class="text">
                <h2>${producto1.titulo}</h2>
                <h3>${producto1.detalle}</h3>
                <p>${producto1.precio}</p>
                <p>${producto1.stock}</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit porro doloremque labore voluptates rerum dicta velit soluta corrupti repellat ducimus fuga error dolores minima voluptatem laborum, sunt voluptatum natus officiis. Consequuntur, nostrum molestiae. Officia, animi beatae. Voluptate nostrum veritatis repellat dolor at? Architecto corrupti sapiente cupiditate deserunt quis at?</p>
            </div>
        </div>
    </div>
    `);

document.querySelector(".section_page_productos").innerHTML = array.join().replaceAll(",", "");
