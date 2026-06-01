const filmes = [
    {
        titulo: "Vingadores",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao:"Ultimato",
    },

    {
        titulo:"Batmam",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/6vbxUh6LWHGhfuPI7GrimQaXNsQ.jpg",
        descricao:"Robin"
    },

    {
        titulo:"Velozes e Furiosos",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/2_Fast_2_Furious_2003.jpg/250px-2_Fast_2_Furious_2003.jpg",
        descricao: "2",
    },

    {
        titulo:"One Piece",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpGMBEZ5jTAhs_xSF21Oie6G-3JwOVUEh04aAYZ4&usqp=CAE&s",
        descricao:"RED"
    },

    {
        titulo:"Como Magia",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcNuqhQHD-LYzXcRJdBbyn6159LGGbqBSAQ&s",
        descricao: "Sky Dance",
    },

    {
        titulo:"Jujutsu Kaisem",
        imagem:"https://m.media-amazon.com/images/M/MV5BMzNhZTdmNDYtNTA0NC00MmNmLWIzYjUtNjg5NzNlYWQ0N2E5XkEyXkFqcGc@._V1_.jpg",
        descricao:"0"
    }
  ]

  const listaFilmes = document.getElementById ("listafilmes");
  function mostrarFilmes(lista) {
    listaFilmes.innerHTML =""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
         <div class="col-md-4">
           <div class="card card-filme h-100">
           <img src="${filme.imagem}" class="card-img-top">
           <div class="card-body">
           <h3>${filme.titulo}</h3>
           <p>${filme.descricao}</p>
           <button class="btn btn-darck" onclick="verDetalhes('${filme.titulo}')">Ver detalhes"</ button
          </div>
        </div>
    </div>
        `
    })
  }

    