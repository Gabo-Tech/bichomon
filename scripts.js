
document.getElementById("gen-1").innerText="Generasión 1 Pokimon";
document.getElementById("gen-1").nextElementSibling.style.backgroundColor = "green"; 
console.log(document.URL);
console.log(document.domain);
const image = document.getElementsByTagName("IMG");
for (let i = 0; i < image.length; i++) {
    image[i].src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    console.log(image[i]);
}
const back = document.getElementsByClassName("infocard-lg-data text-muted");
for (let i = 0; i < back.length; i++) {
    const back1 = document.getElementsByClassName("itype flying");
    back1[i].closest("div").style.backgroundColor= "blue";
}
