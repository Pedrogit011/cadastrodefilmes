const serie = [
    {
        titulo: "Cobra kai",
        imagem: "https://conteudo.imguol.com.br/c/splash/87/2021/12/30/arte-de-divulgacao-da-4-temporada-de-cobra-kai-1640891539281_v2_600x600.jpg",
        descricao:"Cobra Kai é uma aclamada série de comédia dramática e ação, sequência oficial dos filmes clássicos de Karatê Kid. A trama acompanha a rivalidade reacendida entre Johnny Lawrence e Daniel LaRusso trinta anos após o torneio de 1984, explorando temas como redenção, segunda chances e o legado das artes marciais. ",
    },

    {
        titulo:"Euphoria",
        imagem: "https://m.media-amazon.com/images/M/MV5BYzg5MTVmNjgtMGQ3Zi00YThlLWFjMzgtYzc2NGUyMzE2MWQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        descricao:"Depois da prisão de Cal, Nate precisa repensar como seguir a vida. Rue tenta levar uma vida calma depois da recuperação, mas seu passado como dependente química ainda a assombra. Ash precisa lidar com o luto após a morte de Fez e enfrenta um pesadelo com a polícia."
    },

    {
        titulo:"Os Simpsons",
        imagem: "https://resizing.flixster.com/eecrQOJEYIaUBkIZQ9YZMQ5OtD4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjU2OTE5MS53ZWJw",
        descricao: "Os Simpsons é uma famosa sitcom animada norte-americana criada por Matt Groening. A série é uma sátira do estilo de vida e da cultura da classe média dos Estados Unidos, acompanhando o cotidiano cômico da desajustada e carismática família Simpson na cidade fictícia de Springfield."
    },

    {
        titulo:"My Hero Academy",
        imagem:"https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        descricao:"My Hero Academia (também conhecida como Boku no Hero Academia) é uma série de mangá e anime que se passa em um mundo onde 80% da humanidade desenvolveu superpoderes, chamados de Individualidades. Acompanhamos a história de Izuku Midoriya Deku, um garoto que nasceu sem poderes, mas que sonha em se tornar o maior super-herói do mundo.",

    },

    {
        titulo:"Pokemom",
        imagem: "https://saocarlosnotoque.com/wp-content/uploads/2025/04/Pokemon-google-lanca-recurso-para-capturar-personagens-direto.jpg",
        descricao: "Pokémon é uma franquia de sucesso global que gira em torno de criaturas fictícias com habilidades especiais. Existem mais de 1.000 monstrinhos catalogados, divididos em 18 tipos diferentes (como Fogo, Água, Grama e Elétrico). Eles são registrados em um dispositivo inteligente chamado Pokédex, que detalha a biologia e as características de cada um.",
    },

    {
        titulo:"Dragon Boll",
        imagem:"https://m.media-amazon.com/images/M/MV5BYTgyMzA5MjEtNDY3Ny00ZDkyLWJhYzEtYzI2Nzk5Mzc3ZDk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        descricao:"Dragon Ball Super é uma sequência oficial de Dragon Ball Z, criada por Akira Toriyama. A história acompanha Goku e seus amigos após a derrota de Majin Boo, trazendo a paz para a Terra. O enredo se expande para o multiverso, onde os heróis enfrentam deuses, participam de torneios interuniversais e quebram limites de poder para proteger seus mundos."
    }
  ]

  const listaseries= document.getElementById ("listaSerie");
  function mostrarSeries(lista) {
    listafilmes.innerHTML =""
    lista.forEach(Serie => {
        listafilmes.innerHTML += `
         <div class="col-md-4">
           <div class="card card-filme h-100">
           <img src="${serie.imagem}" class="card-img-top">
           <div class="card-body">
           <h3>${serie.titulo}</h3>
           <p>${serie.descricao}</p>
           <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}, ${serie.descricao}') ">Ver Detalhes</button>
        </div>
    </div>
        `
    })
  }

  mostrarserie(filmes)

  function verDetalhes(titulo,descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
  }