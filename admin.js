document.addEventListener("DOMContentLoaded", function() {
    var username = sessionStorage.getItem("username");
    if (username) {
        document.getElementById("username").textContent = username;
    }   
});
document.addEventListener("DOMContentLoaded", function() {
    var username = sessionStorage.getItem("username");
    if (!username) {
        window.location.href = "login.html"; // Ha nincs bejelentkezett felhasználó, irányítson át a login oldalra
    } else {
        document.getElementById("username").textContent = username;
    }

    // Kijelentkező gomb hozzáadása az oldalsávhoz
    var logoutButton = document.createElement("button");
    logoutButton.textContent = "Kijelentkezés";
    logoutButton.addEventListener("click", function() {
        sessionStorage.removeItem("username"); // Session törlése
        window.location.href = "login.html"; // Átirányítás a bejelentkező oldalra
    });

    var sidebar = document.getElementById("sidebar");
    sidebar.appendChild(logoutButton);
});