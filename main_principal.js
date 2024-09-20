let h1 = document.querySelector("h1"); // seleccinnamos el elemento y to guordamos en ta variable h1
h1.innerText = 'Productos'; // cambiamos el texto interno del h1 a "productos"


let array = [];

function cards() {

    for (let i = 1; i < 10; i++) {
        array.push(`
            <div class="card">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg">
                    <div>
                        <h4> card ${i} </h4>
                        <p>Esta es la card número ${i}.</p>
                    </div>
                    <a href="./producto.html"><button onclick="changeVariables(${i})">Ver más...</button></a>

            </div>
    `);

    }

    // if (i == 1) {
    //     title = "BMW M5"
    //     price = "$500.000"
    // } else if (i == 2) {
    //     title = "Gaston Martin"
    //     price = "$800.000"
    // } else if (i == 3) {
    //     title = "Mercedes AMG"
    //     price = "$900.000"
    // }

    document.querySelector("section").innerHTML = array.join().replaceAll(",", "");
}
cards();

