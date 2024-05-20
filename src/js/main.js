const userAgent = navigator.userAgent;

let browserName = "";

if (userAgent.includes("OPR/") || userAgent.includes("Opera")) {
    browserName = "Opera";
} else if (userAgent.includes("Chrome")) {
    browserName = "Chrome";
} else if (userAgent.includes("Firefox")) {
    browserName = "Firefox";
} else {
    browserName = "other browser";
}

const compatibilityMessage = `Your browser (${browserName}) is supported. \nGET READY TO PLAY!`;


        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }


        function getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        
        function askForName() {
            var username = "";
            while (!username) {
                username = prompt("Please enter your name:", "");
                if (username != null && username.trim() !== "") {
                    setCookie("username", username.trim(), 365);
                }
            }
            return username.trim();
        }




        function displayMessage() {
            var username = getCookie("username");
            var currentDate = new Date().toLocaleString();
            var message = "Current date and time: " + currentDate;

            if (username == "null") {
                username = askForName();
                message += "\nHello, " + username + "! Welcome to our website!\n"+compatibilityMessage;
            } else {
                message += "\nWelcome back, " + username + "!\n"+compatibilityMessage;
            }

            alert(message);
        }


        window.onload = function () {
            displayMessage();
        };