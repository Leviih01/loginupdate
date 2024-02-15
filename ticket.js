// Hibajegyek tömbje
var tickets = [];

// Oldal betöltésekor ellenőrzi a felhasználó bejelentkezési állapotát
document.addEventListener("DOMContentLoaded", function() {
    var username = sessionStorage.getItem("username");
    if (!username) {
        window.location.href = "login.html"; // Ha nincs bejelentkezett felhasználó, irányítson át a login oldalra
    } else {
        loadTicketsFromJSON(); // Betölti a korábbi hibajegyeket a JSON fájlból
    }
});

// Hibajegyek betöltése JSON fájlból
function loadTicketsFromJSON() {
    fetch('tickets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Hiba történt a hibajegyek betöltésekor. Státus kód: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        tickets = data;
        displayTickets();
    })
    .catch(error => {
        console.error('Hiba történt a hibajegyek betöltésekor:', error.message);
    });
}

// Hibajegyek mentése JSON fájlba
function saveTicketsToJSON() {
    fetch('tickets.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tickets)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hiba történt a hibajegyek mentésekor. Státus kód: ' + response.status);
        }
    })
    .catch(error => {
        console.error('Hiba történt a hibajegyek mentésekor:', error.message);
    });
}
