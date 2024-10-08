/*
interroga l'utente sul numero di km che vuole percorrere
    salva il valore trasformato in numero in una variabile -- numberOfKm
*/

const stringNumberOfKm = prompt('Inserisci il numero di km che vuoi percorrere')

/* trasforma la stringa in un numero */

const numberOfKm = parseInt(stringNumberOfKm)

/*
Interroga nuovamente l'utente, chiedi l'età del passeggero e trasforma il valore in un numero
*/

const stringAge = prompt('Inserisci l\'età del passeggero')

const passengerAge = parseInt(stringAge)

/*Verificare che entrambi i valori siano effettivamente dei numeri*/

if (!isNaN(numberOfKm)) {
    if (passengerAge < 18) {
        const ticketCost = numberOfKm * 0.21;
        const discountUnder18 = (ticketCost * 20)/100;
        const ticketCostUnder18 = ticketCost - discountUnder18;
        console.log(`I passeggeri Under 18 hanno uno sconto del 20%, quindi il costo del biglietto è ${ticketCostUnder18.toFixed(2)}`);
    }
    else if (passengerAge > 65) {
        const ticketCost = numberOfKm * 0.21;
        const discountOver65 = (ticketCost * 40)/100;
        const ticketCostOver65 = ticketCost - discountOver65;
        console.log(`I passeggeri Over 65 hanno uno sconto del 40%, quindi il costo del biglietto è ${ticketCostOver65.toFixed(2)}`);
    }
    else {
        const ticketCost = numberOfKm * 0.21;
        console.log(`Il costo del biglietto è ${ticketCost.toFixed(2)}`);
    }
}
else {
    console.log('Il numero di km non è corretto')
}
