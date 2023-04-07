console.log('bonne appétit')

// Var om tekst te veranderen
var h2Elemment = document.querySelector(".tekst");
var tekst = document.querySelector("h3");
var groet = document.querySelector("h2");

// Ingredienten buttons klikbaar maken
var buttonPizzabodem = document.querySelector(".buttonPizzabodem");
var buttonTomatensaus = document.querySelector(".buttonTomatensaus");
var buttonSalami = document.querySelector(".buttonSalami");
var buttonOlijven = document.querySelector(".buttonOlijven");
var buttonPaprika = document.querySelector(".buttonPaprika");
var buttonSpinazie = document.querySelector(".buttonSpinazie");
var buttonTomaatjes = document.querySelector(".buttonTomaatjes");
var buttonChampignons = document.querySelector(".buttonChamignons");
var buttonKaas = document.querySelector(".buttonKaas");
var buttonUi = document.querySelector(".buttonUi");

// Topping toevoegen door add
var add = document.querySelector(".add");
var addPizzabodem = document.querySelector(".addpizzabodem");
var addTomatensaus = document.querySelector(".addtomatensaus");
var addSalami = document.querySelector(".addsalami");
var addOlijven = document.querySelector(".addolijven");
var addPaprika = document.querySelector(".addpaprika");
var addSpinazie = document.querySelector(".addspinazie");
var addTomaatjes = document.querySelector(".addtomaatjes");
var addChampignons = document.querySelector(".addchampignons");
var addKaas = document.querySelector(".addkaas");
var addUi = document.querySelector(".addui");

// Date object, groet bericht gebaseerd op tijd
var dataObject = new Date();
var currentHours = dataObject.getHours();

// Random pizza button met array
var randomPizza = ["images/pizza_groente.png", "images/pizza_salami.png", "images/pizza_spinazie.png"];
var randombutton = document.querySelector(".randombutton")

// Audio variable voor de topping
// Bron audio: https://mixkit.co/free-sound-effects/cooking/?page=2
// Bron audio2: https://www.youtube.com/watch?v=3dWisIJuvNo
// Bron uitleg: https://www.youtube.com/watch?v=p4OHVJxd2FI&t=40s
// Bron uitleg: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
var audio = new Audio("audio/tik.mp3");
var audio2 = new Audio("audio/shuffle.mp3");


//If Else statement groet op basis van tijd
if (currentHours >= 12 && currentHours < 18){
    groet.textContent = "Goedenmiddag, stel jouw pizza samen";
}
else if (currentHours >= 18 && currentHours < 22) {
    groet.textContent = "Goedenavond, stel jouw pizza samen";
}
else 
    groet.textContent = "Sorry, helaas zijn wij op dit moment gesloten";


// Alle add(topping) een functie geven om ze later een addEventlistener te geven. 
// Tekst wordt veranderd naar je gekozen topping, op het moment dat je klikt speelt de audio af
function addBodem(){
    addPizzabodem.src = "images/button_pizzabodem.png"
    tekst.textContent = "Pizzabodem geplaatst!"
    audio.play();
};

function addSaus(){
    addTomatensaus.src = "images/button_tomatensauss.png"
    tekst.textContent = "Tomatensaus toegevoegd!"
    audio.play();
};

function addSalamiTopping(){
    addSalami.src = "images/salami.png"
    tekst.textContent = "Salami toegevoegd!"
    audio.play();
}

function addOlijvenTopping(){
    addOlijven.src = "images/olijven.png"
    tekst.textContent = "Olijven toegevoegd!"
    audio.play();
}

function addPaprikaTopping(){
    addPaprika.src = "images/paprika.png"
    tekst.textContent = "Paprika toegevoegd!"
    audio.play();
}

function addSpinazieTopping(){
    addSpinazie.src = "images/spinazie.png"
    tekst.textContent = "Spinazie toegevoegd!"
    audio.play();
}

function addTomaatjesTopping(){
    addTomaatjes.src = "images/tomaatjes.png"
    tekst.textContent = "Tomaatjes toegevoegd!"
    audio.play();
}

function addChampignonsTopping(){
    addChampignons.src = "images/champignons.png"
    tekst.textContent = "Champignons toegevoegd!"
    audio.play();
}

function addKaasTopping(){
    addKaas.src = "images/kaas.png"
    tekst.textContent = "Kaas toegevoegd!"
    audio.play();
}

function addUiTopping(){
    addUi.src = "images/ui.png"
    tekst.textContent = "Ui toegevoegd!"
    audio.play();
}

// addEventListener koppelen aan de functions, bij een klik wordt de function uitgevoerd
buttonPizzabodem.addEventListener("click", addBodem);
buttonTomatensaus.addEventListener("click", addSaus);
buttonSalami.addEventListener("click", addSalamiTopping);
buttonOlijven.addEventListener("click", addOlijvenTopping);
buttonPaprika.addEventListener("click", addPaprikaTopping);
buttonSpinazie.addEventListener("click", addSpinazieTopping);
buttonTomaatjes.addEventListener("click", addTomaatjesTopping);
buttonChampignons.addEventListener("click", addChampignonsTopping);
buttonKaas.addEventListener("click", addKaasTopping);
buttonUi.addEventListener("click", addUiTopping);

// Var randomPizzaButton, random pizza wordt in de functie uitgerekend. Door math.random te vermenigvuldigen 
// met de aantal afbeelding in de array krijg je een random afbeelding.
// Math.floor zorgt ervoor dat het getal wordt afgerond. Random getal krijg je te zien in de console
function randomPizzaButton(){
    var randomGetal = Math.random()*3;

        randomGetal = Math.floor(randomGetal);
        add.src = randomPizza[randomGetal];
        console.log(randomGetal)
        audio2.play();
};
randombutton.addEventListener("click", randomPizzaButton);