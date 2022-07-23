// signup js
let form = document.querySelector("form");

    let signupLs=JSON.parse(localStorage.getItem("Signup")) || [];
    
    form.addEventListener("submit", onclick);

    function onclick() {
        event.preventDefault();
        let obj={
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        };
        if(obj.name=="" || obj.email=="" || obj.password==""){
            alert("Fill all Fields")
            return;
        
        }
       
            signupLs.push(obj)
            localStorage.setItem("Signup",JSON.stringify(signupLs));
            window.location.href="signin.html"
    }