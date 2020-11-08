console.log("script_oop");

(function() {
    
function Validator(form) {
    
    this.form = form;
    this.emailField = form.querySelector("input[name='email']");
    this.nameField  = form.querySelector("input[name='name']");
    this.messageField = form.querySelector("textarea[name='message']"); 
    
    this.form.addEventListener("submit", this.validate.bind(this), false);
};

Validator.prototype.displayError = function(errors) {
        
        var p = this.form.querySelector(".form-errors");
        
        if(!p) {
            var p = document.createElement("p");
            p.className = "form-errors";
        }
        p.innerHTML = errors.join("<br/>");
        
        this.form.insertBefore(p, this.form.children[0]);
        
    }    
    
Validator.prototype.isEmail = function(text) {
    return text.indexOf("@") !== -1;
};

Validator.prototype.isNotEmpty = function(text) {
    return text !== "";
};
    
Validator.prototype.validate = function(e) {
        e.preventDefault();
        console.log("submit");
        var errors = [];

        if( !this.isEmail(this.emailField.value)) {
            console.log("Brak małpay"); 
            errors.push("Podaj poprawny email");
            this.emailField.classList.add("invalid"); 
        } else {
            console.log("Jest małpy");
            this.emailField.classList.remove("class","invalid");
        }

        if( !this.isNotEmpty(this.nameField.value)) {
            errors.push("Podaj swoje imię");
            this.nameField.classList.add("invalid");
        } else {
            this.nameField.classList.remove("class","invalid"); 
        }
 
        if(!this.isNotEmpty(this.messageField.value)) {
            errors.push("Podaj wiadomość");
            this.messageField.classList.add("invalid");
        } else {
            this.messageField.classList.remove("class","invalid"); 
        }

        if(errors.length) {
            //console.log("0 true");
            //console.log(errors);
            this.displayError(errors);           
        } else {
            //console.log("0 false");
            this.displayError(errors);
            this.form.submit();
        }  
}    
    
var form1 = new Validator(document.querySelector("#form"));
var form2 = new Validator(document.querySelector("#form2"));
    
    
    
    
    
    
    
    
    
    
})();