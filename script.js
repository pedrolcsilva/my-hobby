document.getElementById("title").innerHTML = "My Biggest Hobby";

let image = document.getElementById("photo");
let img1 = document.createElement("img");
img1.src="images/perfil.jpeg";
image.appendChild(img1);

document.getElementById("me").innerHTML = "Quem sou eu?";
document.getElementById("name").innerHTML = "Nome: Pedro Lucas De Castro Silva";
document.getElementById("age").innerHTML = "Idade: 18 anos";
document.getElementById("state").innerHTML = "Estado: Minas Gerais";



document.getElementById("hobby").innerHTML = "Animes";
document.getElementById("desc").innerHTML = "Descrição: Vejo anime desde pequeno e sempre achei muito interessante as histórias e os personagens que eram desenvolvidos";
document.getElementById("link").innerHTML = "Crunchyroll";
link.href="https://www.crunchyroll.com/pt-br";
let animes = document.getElementById("animes");

let img2 = document.createElement("img");
img2.src="images/naruto.png";
animes.appendChild(img2);

let img3 = document.createElement("img");
img3.src="images/fullmetal.png";
animes.appendChild(img3);

let img4 = document.createElement("img");
img4.src="images/bleach.png";
animes.appendChild(img4);

let img5 = document.createElement("img");
img5.src="images/hunterhunter.png";
animes.appendChild(img5);