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

    console.log("KM ---> " + typeof (km) + "/// AGE ---> " + typeof (age)); //STAMPA DI DEBUG
});