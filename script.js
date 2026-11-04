let proizvodi = [
    {naziv:"Audio oprema",slika:"images/audio_oprema.png"},
    {naziv:"Kablovi", slika:"images/kablovi.png"},
    {naziv:"Gaming", slika:"images/gaming.png" },
    {naziv:"Konzole", slika:"images/konzole.png" },
];

function srediIme(ime) {
    return ime.trim().toUpperCase();
}

function napraviListu() {

    let tekst = "";

    for (let i = 0; i < proizvodi.length; i++) {

        tekst += "<li style='list-style:none; margin-bottom:15px; text-align:center;'>" +
        
        "<img src='" + proizvodi[i].slika + "' width='120'><br>" +

        proizvodi[i].naziv +

        "</li>";
    }

    return tekst;
}

function meniKlik() {
    let meni = document.getElementById("meni");

    if (meni.style.display == "flex") {
        meni.style.display = "none";
    } else {
        meni.style.display = "flex";
    }
}

function prikaziListu() {
    let div = document.getElementById("dinamickaLista");
    let dugme = document.getElementById("prikaziListu");

    if (div.innerHTML == "") {
        div.innerHTML = "<ul>" + napraviListu() + "</ul>";
        dugme.innerText = "Sakrij proizvode: ";
    } else {
        div.innerHTML = "";
        dugme.innerText = "Prikaži proizvode:";
    }
}

function posaljiFormu() {

    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let email = document.getElementById("email").value;
    let poruka = document.getElementById("poruka").value;

   if (!ime || !prezime || !email || !poruka) {
        alert("Popuni obavezna polja!");
        return false;
}

    let izabrani = [];

    if (document.getElementById("mis").checked) {
        izabrani.push("Miš");
    }

    if (document.getElementById("tastatura").checked) {
        izabrani.push("Tastatura");
    }

    if (document.getElementById("monitor").checked) {
        izabrani.push("Monitor");
    }
    let kategorija = "";

    if (document.getElementById("laptop").checked) {
        kategorija = "Laptop";
    } 
    else if (document.getElementById("dodaci").checked) {
        kategorija = "Dodaci";
    } 
    else if (document.getElementById("monitorRadio").checked) {
        kategorija = "Monitor";
    }

   alert(
    "\nIme: " + ime + 
    "\nPrezime:" + prezime +
    "\nEmail: " + email +
    "\nProizvodi: " + izabrani.join(", ") +
    "\nKategorija: " + kategorija +
    "\nPoruka: " + poruka 
);
    
    document.body.style.backgroundColor='lightgreen';

    return false;
}