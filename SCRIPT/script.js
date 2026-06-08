const filmes = [
    {
        titulo: "Vingadores",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao:"Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências",
    },

    {
        titulo:"Batman",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/250px-The_Dark_Knight.jpg",
        descricao:"Como herói, o codinome Cavaleiro das Trevas reflete a sua essência: um vigilante sem superpoderes que utiliza intelecto, artes marciais, tecnologia de ponta e muito medo para combater o crime. Operando nas sombras e fora da lei, ele age com um código moral rígido para proteger Gotham City."
    },

    {
        titulo:"Velozes e Furiosos",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/2_Fast_2_Furious_2003.jpg/250px-2_Fast_2_Furious_2003.jpg",
        descricao: "Em + Velozes + Furiosos 2003, o ex-policial Brian O Conner Paul Walker faz um acordo com o FBI para evitar a prisão. Em Miami, ele se infiltra no crime organizado como motorista do traficante Carter Verone. Para isso, ele recruta a ajuda de seu velho amigo Roman Pearce Tyrese Gibson. Juntos, com a ajuda da agente secreta Monica Fuentes Eva Mendes, eles usam rachas e habilidades extremas de direção para desarticular o esquema de lavagem de dinheiro."
    },

    {
        titulo:"One Piece",
        imagem:"https://ovicio.com.br/wp-content/uploads/2022/12/20221231-one-piece-red-555x555.webp",
        descricao:"Após Shiki sequestrar Nami para usá-la como sua navegadora, Luffy e sua tripulação invadem um arquipélago de ilhas flutuantes perigosas para resgatar a companheira e impedir que o vilão conclua sua vingança contra o mundo",

    },

    {
        titulo:"Como Magia",
        imagem: "https://cinemaeafins.com.br/wp-content/uploads/2026/04/poster-de-como-magica-2026-netflix.webp",
        descricao: "Como Mágica (Spellbound) é uma animação lançada em 2026 pela Skydance Animation na Netflix. A história segue Ollie, um pequeno Pookoo, e Ivy, uma ave majestosa. Eles são inimigos naturais em um reino chamado Vale. Após trocarem de corpo magicamente, são forçados a unir forças para sobreviver e desfazer o feitiço.",
    },

    {
        titulo:"Jujutsu Kaisem",
        imagem:"https://m.media-amazon.com/images/M/MV5BMzNhZTdmNDYtNTA0NC00MmNmLWIzYjUtNjg5NzNlYWQ0N2E5XkEyXkFqcGc@._V1_.jpg",
        descricao:"Jujutsu Kaisen 0 conta a história de Yuta Okkotsu, um jovem assombrado pelo espírito monstruoso e superpoderoso de sua amiga de infância, Rika. Após ser salvo da execução por Satoru Gojo, Yuta é matriculado na Escola de Jujutsu para aprender a controlar essa maldição e usá-la para o bem."
    }
  ]

  const listaFilmes = document.getElementById ("listaFilmes");
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
           <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}, ${filme.descricao}') ">Ver Detalhes</button>
        </div>
    </div>
        `
    })
  }

  mostrarFilmes(filmes)

  function verDetalhes(titulo,descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
  }

    