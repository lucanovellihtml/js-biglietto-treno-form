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


    let price_ticket = document.getElementById("price_ticket");

    if (age < 18)
        price_ticket.innerHTML = "Il prezzo del ticket è: " + ((km * 0.21) * 20) / 100 + " €";

    else if (age > 65)
        price_ticket.innerHTML = "Il prezzo del ticket è: " + ((km * 0.21) * 40) / 100 + " €";

    else
        price_ticket.innerHTML = "Il prezzo del ticket è: " + km * 0.21 + " €";

    //console.log("KM ---> " + typeof (km) + "/// AGE ---> " + typeof (age)); //STAMPA DI DEBUG
});