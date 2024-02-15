document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett viselkedést (újratöltődés)

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // AJAX kérés a JSON fájl beolvasására
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var users = JSON.parse(xhr.responseText);

                    var authenticatedUser = users.find(function(user) {
                        return user.username === username && user.password === password;
                    });

                    if (authenticatedUser) {
                        // Session tárolása a felhasználónévvel
                        sessionStorage.setItem("username", username);
                        window.location.href = "admin.html";
                    } else {
                        alert("Invalid username or password");
                    }
                } else {
                    alert("Error loading user data");
                }
            }
        };

        xhr.open("GET", "users.json", true);
        xhr.send();
    });
});


