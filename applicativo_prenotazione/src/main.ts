// Definizione delle costanti per la logica di business
const MAX_PERSONE = 10;
const APERITIVO_INIZIO = "16:00";
const APERITIVO_FINE = "19:00";

/**
 * Funzione principale per gestire l'invio del modulo
 */
function gestisciPrenotazione(event: Event): void {
    event.preventDefault();

    // Recupero degli elementi DOM
    const nomeInput = document.getElementById('userName') as HTMLInputElement;
    const personeInput = document.getElementById('numPeople') as HTMLInputElement;
    const dataInput = document.getElementById('resDate') as HTMLInputElement;
    const orarioInput = document.getElementById('resTime') as HTMLInputElement;
    const resultDiv = document.getElementById('resultMessage') as HTMLDivElement;

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

    // 3. Controllo fascia oraria aperitivo (16:00 - 19:00 per tutti i giorni)
    if (!isOrarioAperitivo(orario)) {
        mostraErrore("Prenotazione disponibile solo per fascia aperitivo (16:00 - 19:00)");
        return;
    }

    // Se tutti i controlli passano
    mostraSuccesso(`Grazie ${nome}! Prenotazione confermata per ${numPersone} persone il giorno ${dataString} alle ore ${orario}.`);
}

/**
 * Verifica se l'orario inserito rientra nella fascia aperitivo
 */
function isOrarioAperitivo(orario: string): boolean {
    // L'orario arriva nel formato "HH:MM"
    return orario >= APERITIVO_INIZIO && orario <= APERITIVO_FINE;
}

/**
 * Mostra un messaggio di errore nel DOM
 */
function mostraErrore(messaggio: string): void {
    const resultDiv = document.getElementById('resultMessage') as HTMLDivElement;
    resultDiv.innerHTML = messaggio;
    resultDiv.classList.add('error');
}

/**
 * Mostra un messaggio di successo nel DOM
 */
function mostraSuccesso(messaggio: string): void {
    const resultDiv = document.getElementById('resultMessage') as HTMLDivElement;
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
