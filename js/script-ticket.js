"use strict";

//DEFINIZIONE VARIABILE BOTTONE FORM
const button = document.getElementById("button");
const form = document.getElementById("form");

//METODO ACQUSIZIONE PARAMETRI FORM
form.addEventListener("submit", function (event) {

    event.preventDefault(); //MODIFICO IL COMPORTAMENTO DEL FORM

    //DEFINIZIONE VARIABILI INPUT
    const km = parseFloat(document.getElementById("kilometers").value);
    const age = parseInt(document.getElementById("age").value);

    //CHECK VARIABILI INPUT
    if (isNaN(km) || isNaN(age))
        location.reload(); //RICARICO LA PAGINA SE I VALORI NON SONO CORRETTI*/

    //console.log("KM ---> " + typeof (km) + "/// AGE ---> " + typeof (age)); //STAMPA DI DEBUG
});


//METODO CALCOLO COSTO TICKET
form.addEventListener("submit", function (event) {

    event.preventDefault(); //MODIFICO IL COMPORTAMENTO DEL FORM

    //DEFINIZIONE VARIABILI INPUT
    const km = parseFloat(document.getElementById("kilometers").value);
    const age = parseInt(document.getElementById("age").value);

    //SOSTITUZIONE DEL CONTENUTO DEI PARAGRAFI HTML, CON RIMOZIONE DELLA CLASSE DISPLAY NONE NEL CONTAINER PRICE
    let container_price = document.getElementById("container_price").classList.remove("d-none");
    let age_ticket = document.getElementById("age_ticket").innerHTML = "Età selezionata: " + age + " anni";
    let km_ticket = document.getElementById("km_ticket").innerHTML = "Chilometri selezionati: " + km + " km";


    //DEFINIZIONE VARIABILE PREZZO DEL TICKET
    let price_ticket = document.getElementById("price_ticket");

    if (age < 18)
        price_ticket.innerHTML = "Il prezzo del ticket è: " + ((km * 0.21) * 20) / 100 + " €";

    else if (age > 65)
        price_ticket.innerHTML = "Il prezzo del ticket è: " + ((km * 0.21) * 40) / 100 + " €";

    else
        price_ticket.innerHTML = "Il prezzo del ticket è: " + km * 0.21 + " €";

    //console.log("KM ---> " + typeof (km) + "/// AGE ---> " + typeof (age)); //STAMPA DI DEBUG
});