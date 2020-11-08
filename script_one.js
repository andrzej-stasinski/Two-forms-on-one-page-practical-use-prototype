
(function() {
    console.log("function");
    
    var form = document.querySelector("#form"),
        emailField = form.querySelector("input[name='email']"),
        nameField  = form.querySelector("input[name='name']"),
        messageField = form.querySelector("textarea[name='message']");    
    
    function displayError(errors) {
        
        var p = form.querySelector(".form-errors");
        
        if(!p) {
            var p = document.createElement("p");
            p.className = "form-errors";
        }
        p.innerHTML = errors.join("<br/>");
        
        form.insertBefore(p, form.children[0]);
        
    }
    
    function isEmail(text) {
        return text.indexOf("@") !== -1;
    }
    
    function isNotEmpty(text) {
        return text !== "";
    }
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("submit");
        var errors = [];
        
        console.log(emailField.value.indexOf("@"));
        console.log(typeof emailField.value.indexOf("@"));

        if( !isEmail(emailField.value)) {
            console.log("Brak małpay"); 
            errors.push("Podaj poprawny email");
            emailField.classList.add("invalid"); 
        } else {
            console.log("Jest małpy");
            //emailField.removeAttribute("class","invalid");
            emailField.classList.remove("class","invalid");
        }
        console.log("isNotEmpty "+isNotEmpty(nameField.value));
        if( !isNotEmpty(nameField.value)) {
            errors.push("Podaj swoje imię");
            nameField.classList.add("invalid");
        } else {
            nameField.classList.remove("class","invalid"); 
        }
 
        if(!isNotEmpty(messageField.value)) {
            errors.push("Podaj wiadomość");
            messageField.classList.add("invalid");
        } else {
            messageField.classList.remove("class","invalid"); 
        }
        
        console.log(typeof errors.length + " " + errors.length);

        if(errors.length) {
            displayError(errors);           
        } else {
            displayError(errors);
            form.submit();
        }       
        
    });
    

})();















