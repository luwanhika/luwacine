// JSON
const film = {
  title: "Harry Potter",
  url: "http://caminho.com/imagem",
};

// HTML
const figure = document.createElement("figcaption"); // <figure>
const img = document.createElement("img"); // <img>
const title = document.createElement("figcaption"); // <figcaption>
const listBanners = document.querySelector(".list-banners");

figure.classList.add("wrapper-banner"); // <figure class="wrapper-banner">

img.src = "img/banner-1.jpeg"; // adicionando <img src="img/banner-1.jpeg">
img.alt = "Border";  // adicionando <img src="img/banner-1.jpeg" alt="Boder">
img.classList.add("main-banner"); // add <img class="main-banner" src="img/banner-1.jpeg" alt="Border">

title.textContent = "Nome do filme"; // <figcaption>Nome do filme</figcaption>
title.classList.add("main-caption"); // <figcaption class="main-caption">Nome do filme</figcaption>

/*
<figure class="wrapper-banner">
<img class="main-banner" src="img/banner-1.jpeg" alt="Border">
</figure>
 */
figure.insertAdjacentElement("beforeend", img);

/*
<figure class="wrapper-banner">
<img class="main-banner" src="img/banner-1.jpeg" alt="Border">
<figcaption class="main-caption">Nome do filme</figcaption>
</figure>
 */
figure.insertAdjacentElement("beforeend", title);

listBanners.insertAdjacentElement("beforeend", figure);