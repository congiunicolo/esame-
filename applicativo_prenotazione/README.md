# OttoCN - Applicativo di Prenotazione TypeScript

## Descrizione
Applicativo web per la gestione delle prenotazioni dei tavoli presso il Bar OttoCN. Sviluppato in TypeScript per garantire una logica robusta e tipizzata.

## Funzionalità
- Modulo di inserimento dati (Nome, Persone, Orario).
- Validazione lato client:
    - Massimo 10 persone per prenotazione online.
    - Prenotazione consentita solo tra le 17:00 e le 21:00 (fascia aperitivo).
- Feedback immediato all'utente senza ricaricamento pagina.

## Requisiti Tecnici
- Node.js (per la compilazione TypeScript)
- Browser moderno

## Installazione e Avvio
1. Entrare nella cartella `applicativo_prenotazione`.
2. Eseguire `npm install` per installare le dipendenze (TypeScript).
3. Eseguire `npm run build` per compilare il codice TS in JS.
4. Aprire `index.html` nel browser.

## Struttura File
- `src/main.ts`: Codice sorgente TypeScript.
- `dist/main.js`: Codice compilato JavaScript (utilizzato dal browser).
- `index.html`: Interfaccia utente.
- `style.css`: Stili del modulo.
- `flowchart.md`: Documentazione logica dell'applicativo.
