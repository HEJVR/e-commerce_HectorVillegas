let h1 = document.querySelector("h1"); // seleccinnamos el elemento y to guordamos en ta variable h1
h1.innerText = 'Productos'; // cambiamos el texto interno del h1 a "productos"


let array = [];

for (let i = 1; 1 < 18; i++) {
    array.push(`
        <div class="col-md-4 col-sm-6 col-12">
            < div class="card" style="width: 18rem;">
                <img src="https://66d9ee6caa@7a954166f18ed--gregarious-melba-cacdba.netlify.app/${i}.jpg">
                    <div class>
                        <h4> card ${i} </h4>
                        <p>Esta es la card número ${i}.</p>
                    </div>
            </div>
        </div >
    `);
    document.querySelector("section").innerHTML = array.join().replaceAl1(",", "");

}