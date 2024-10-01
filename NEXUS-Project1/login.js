
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }
    function validateForm(event) {
        event.preventDefault();
    
        const firstname = document.getElementById("firstname").value.trim();
        const lastname = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
    
        document.getElementById("firstname-error").textContent = "";
        document.getElementById("lastname-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("password-error").textContent = "";
        document.getElementById("success-message").textContent = "";
    
        let isValid = true;
    
        const namePattern = /^[A-Za-z]+$/;
        if (firstname === "") {
            document.getElementById("firstname-error").textContent = "Firstname is required.";
            isValid = false;
        } else if (!namePattern.test(firstname)) {
            document.getElementById("firstname-error").textContent = "Firstname must contain only letters.";
            isValid = false;
        }
    
        if (lastname === "") {
            document.getElementById("lastname-error").textContent = "Lastname is required.";
            isValid = false;
        } else if (!namePattern.test(lastname)) {
            document.getElementById("lastname-error").textContent = "Lastname must contain only letters.";
            isValid = false;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("email-error").textContent = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("email-error").textContent = "Please enter a valid email.";
            isValid = false;
        }
    
        if (password === "") {
            document.getElementById("password-error").textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 6) {
            document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
            isValid = false;
        }

        if (isValid) {
            document.getElementById("success-message").textContent = "Form submitted successfully!";
        } 
    }
    