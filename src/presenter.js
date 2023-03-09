// import sumar from "./sumador";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
// const div = document.querySelector("#resultado-div");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first.value);
//   const secondNumber = Number.parseInt(second.value);

//   div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
// });

document.getElementById('form_Post').addEventListener('submit',guardarPost);

function guardarNotas(e){
    
    const titulo=document.getElementById('titulo').value;
    const contenido=document.getElementById('contenido').value;

    const objPost = {
        titulo,
        contenido
    };
    //localStorage.setItem('notas',JSON.stringify(objNota));
    
    if(localStorage.getItem('posts')=== null){
        
        let posts=[];
        posts.push(objPost);
        localStorage.setItem('posts',JSON.stringify(posts));
    }else{
        let posts= JSON.parse(localStorage.getItem('posts'));
        notas.push(objPost);
        localStorage.setItem('posts',JSON.stringify(posts));
    }
    MostrarPosts();
    document.getElementById('form_Notas').reset();
    e.preventDefault();
   
  
}
function MostrarPosts(e){
    let divRespuesta=document.getElementById('publicaciones');
    let posts= JSON.parse(localStorage.getItem('posts'));

    divRespuesta.innerHTML='';

    for(let i=0;i<posts.length; i++){

        let titulo=notas[i].titulo;
        let contenido=notas[i].contenido;

        divRespuesta.innerHTML+=`<div class="card">
                            <div class="card-body">
                                <h2>${titulo}</h2>
                                <p>${contenido}</p>
                                <a class="btn btn-danger" onclick="borrarNotas('${titulo}')">eliminar</a>
                            </div>
                        </div>`
    }

}
