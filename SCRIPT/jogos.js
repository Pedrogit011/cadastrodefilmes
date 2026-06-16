const jogos = [
    {
        titulo: "Clash Royale",
        imagem: "https://w0.peakpx.com/wallpaper/475/382/HD-wallpaper-pekka-clash-royale-clans-clash-royale-supercell-thumbnail.jpg",
        descricao:"Clash Royale é um jogo de estratégia em tempo real da Supercell, onde você coleciona cartas e monta baralhos para destruir as torres inimigas.",
    },

    {
        titulo:"Brawl Stars",
        imagem: "https://i.pinimg.com/736x/e6/e7/2f/e6e72f0889d7103475ea50c8d3060573.jpg",
        descricao:"Brawl Stars é um jogo eletrônico de ação e tiro multijogador para dispositivos móveis, desenvolvido e publicado pela Supercell."
    },

    {
        titulo:"Fortinete",
        imagem: "https://assets.xboxservices.com/assets/e3/e5/e3e53d82-ba68-472b-be93-ca4a5373ff94.png?n=MSXC-games-and-apps-Fortnite-150x225-01_864.png",
        descricao: "Fortnite é um jogo eletrônico multijogador gratuito e plataforma online desenvolvido pela Epic Games"
    },

    {
        titulo:"Fifa26",
        imagem:"https://cdn.awsli.com.br/600x450/2443/2443989/produto/373709958/821912f43eea313d5b3a9f62d8a21938-61e535zpee.jpg",
        descricao:"O EA SPORTS FC 26 (sucessor da franquia FIFA) é a mais recente evolução da simulação de futebol da EA. ",

    },

    {
        titulo:"Minecraft",
        imagem: "https://store-images.s-microsoft.com/image/apps.17382.13510798885735219.9735d495-578c-4a4c-b892-3eb3a780b3a0.d3792486-cf98-40c0-a2c1-d6443f0e2b70",
        descricao: "Minecraft é um jogo de aventura e sobrevivência do tipo sandbox.",
    },

    {
        titulo:"The sims 4",
        imagem:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Sims4_Rebrand.png/250px-Sims4_Rebrand.png",
        descricao:"The Sims é uma famosa franquia de jogos eletrônicos de simulação de vida, onde você cria e controla personagens chamados Sims.",
    }
  ];

  const listaJogos = document.getElementById ("listaJogos");
  function mostrarJogos(lista) {
    listaJogos.innerHTML =""
    lista.forEach(jogo => {
        listaJogos.innerHTML += `
         <div class="col-md-4">
           <div class="card card-filme h-100">
           <img src="${jogo.imagem}" class="card-img-top" alt="${jogo.titulo}">
           <div class="card-body">

           <h3>${jogo.titulo}</h3>
           <p>${jogo.descricao}</p>
           <button class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}, ${jogo.descricao}') ">Ver Detalhes
           </button>
        </div>
      </div>
    </div>
        `
    });
  }

  function verDetalhes(titulo, descricao){
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "success",
        confirmButtonColor: "#2563eb"
    });
}

campoBusca.addEventListener("input", () => {
    const texto = campoBusca.value.toLowerCase();

    const jogosFiltrados = jogos.filter(jogo =>
        jogo.titulo.toLowerCase().includes(texto)
    );

    mostrarJogos(jogosFiltrados);
});

mostrarJogos(jogos);