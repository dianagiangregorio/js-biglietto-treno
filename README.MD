
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1) All'avvio il programma interroga l'utente sul numero di km che vuole percorrere
    salva il valore trasformato in numero in una variabile -- numberOfKm

2) Interroga nuovamente l'utente e chiede l'età del passeggero
    salva anche questo valore trasformato in numero in una variabile - passengerAge

3) Verificare che entrambi i valori siano effettivamente dei numeri
    isNan()

4) Calcolare il costo del biglietto:
    SE passengerAge < 18 :
        (numberOfKm * 0.21) -20% -- salvare in una variabile ticketCostUnder18
        stampa il costo del biglietto ticketCostUnder18 con due cifre dopo la virgola
    ALTRIMENTI SE passengerAge > 65 :
        (numberOfKm * 0.21) -40% -- salvare in una variabile ticketCostOver65
        stampa il costo del biglietto ticketCostOver65 con due cifre dopo la virgola
    ALTRIMENTI:
        numberOfKm * 0.21 -- salvare in una variabile ticketCost
        stampa il costo del biglietto ticketCost con due cifre dopo la virgola