document.getElementById('form_Post').addEventListener('submit',guardarPost);

function guardarPost(e){
    
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
        posts.push(objPost);
        localStorage.setItem('posts',JSON.stringify(posts));
    }
    MostrarPosts();
    document.getElementById('form_Post').reset();
    e.preventDefault();

}
function MostrarPosts(e){
    let divRespuesta=document.getElementById('publicaciones');
    let posts= JSON.parse(localStorage.getItem('posts'));

    divRespuesta.innerHTML='';

    for(let i=0;i<posts.length; i++){

        let titulo=posts[i].titulo;
        let contenido=posts[i].contenido;

        divRespuesta.innerHTML+=`<div>
                            
                                <h2>${titulo}</h2>
                                <p>${contenido}</p>
              
                        </div>`
    }

}
MostrarPosts();
