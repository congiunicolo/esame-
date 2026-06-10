"use strict";
// Definizione delle costanti per la logica di business
const MAX_PERSONE = 10;
const APERITIVO_INIZIO = "17:00";
const APERITIVO_FINE = "21:00";
/**
 * Funzione principale per gestire l'invio del modulo
 */
function gestisciPrenotazione(event) {
    event.preventDefault();
    // Recupero degli elementi DOM
    const nomeInput = document.getElementById('userName');
    const personeInput = document.getElementById('numPeople');
    const dataInput = document.getElementById('resDate');
    const orarioInput = document.getElementById('resTime');
    const resultDiv = document.getElementById('resultMessage');
    const nome = nomeInput.value;
    const numPersone = parseInt(personeInput.value);
    const dataString = dataInput.value;
    const orario = orarioInput.value;
    // Reset messaggi precedenti
    resultDiv.className = 'message';
    resultDiv.innerHTML = '';
    // 1. Controllo numero persone
    if (numPersone > MAX_PERSONE) {
        mostraErrore("Contattare il locale per gruppi numerosi");
        return;
    }
    // 2. Controllo data
    if (!dataString) {
        mostraErrore("Selezionare una data valida");
        return;
    }
    // 3. Controllo fascia oraria aperitivo (17:00 - 21:00 per tutti i giorni)
    if (!isOrarioAperitivo(orario)) {
        mostraErrore("Prenotazione disponibile solo per fascia aperitivo (17:00 - 21:00)");
        return;
    }
    // Se tutti i controlli passano
    mostraSuccesso(`Grazie ${nome}! Prenotazione confermata per ${numPersone} persone il giorno ${dataString} alle ore ${orario}.`);
}
/**
 * Verifica se l'orario inserito rientra nella fascia aperitivo
 */
function isOrarioAperitivo(orario) {
    // L'orario arriva nel formato "HH:MM"
    return orario >= APERITIVO_INIZIO && orario <= APERITIVO_FINE;
}
/**
 * Mostra un messaggio di errore nel DOM
 */
function mostraErrore(messaggio) {
    const resultDiv = document.getElementById('resultMessage');
    resultDiv.innerHTML = messaggio;
    resultDiv.classList.add('error');
}
/**
 * Mostra un messaggio di successo nel DOM
 */
function mostraSuccesso(messaggio) {
    const resultDiv = document.getElementById('resultMessage');
    resultDiv.innerHTML = messaggio;
    resultDiv.classList.add('success');
}
// Inizializzazione dell'evento submit
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    if (form) {
        form.addEventListener('submit', gestisciPrenotazione);
    }
});
