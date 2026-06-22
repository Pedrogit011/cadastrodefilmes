create database catalogo2_filmes;
use catalogo2_filmes;
create table filmes (
id int auto_increment primary key,
titulo varchar(100),
descricao text, 
imagem varchar(255),
categoria varchar(50)
);
insert into filmes(titulo, descricao, imagem, categoria)
values ("Vingadores Ultimato","Thanos tenta reunir as seis Joias do Infinito para apagar metade da vida no universo","https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",  "Ficcção Científica"),
 ("Batman O Cavaleiro Das Trevas","Batman, Jim Gordon e Harvey  combatem o crime organizado em Gotham","https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/250px-The_Dark_Knight.jpg",  "Ação"),
 ("Backrooms Um Não-Lugar","O vendedor Clark desaparece em um labirinto infinito de salas vazias após achar um portal no porão","https://preview.redd.it/is-this-the-offical-poster-for-the-backrooms-movie-v0-lul1fkm69qdf1.jpeg?auto=webp&s=f5e33c9ea32706e20589849b1faf77d929c74749",   "Animação"),
 ("Super Mario Galaxy","Bowser sequestra a Princesa Peach e a leva para o espaço","https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/The_Super_Mario_Galaxy_Movie_poster.jpeg/250px-The_Super_Mario_Galaxy_Movie_poster.jpeg",   "Ficcção Científica"),
 ("Star Wars Mandalorian","O caçador de recompensas solitário Din Djarin é contratado para capturar um alvo misterioso nos confins da galáxia","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfcFcNLClcwsPKn92fLnrpnnGqurbygVpAuugIVUfJNY7HzmMK9JW1xGeqW8bSUYezd9GOq8CIdYINNzo60AS4o1vfh-rL3dYfS2XtZg&s=10",   "Ficcção Científica"),
 ("Mestre Do Universo","O guerreiro He-Man e seus aliados defendem o planeta Eternia contra as forças malignas do feiticeiro Esqueleto","https://upload.wikimedia.org/wikipedia/pt/thumb/0/09/Masters_of_the_Universe_2026_poster.jpeg/250px-Masters_of_the_Universe_2026_poster.jpeg",   "Ficcção Científica");

select * from filmes