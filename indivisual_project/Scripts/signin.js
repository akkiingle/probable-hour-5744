
    // signin js
    let form=document.querySelector("form");
    
    let signupLs=JSON.parse(localStorage.getItem("Signup")) || []
    
    form.addEventListener("submit",
    function(event){
        event.preventDefault();
        let obj={
            email: form.email.value,
            password: form.password.value
        };
        let flag=false;
        signupLs.forEach(function(ele){
            if(ele.email=== obj.email && ele.password===obj.password){
                flag=true;
                localStorage.setItem("signin",JSON.stringify(ele))
                alert("Login Successfull")
              window.location.href="index.html"        
        }
        
        })
        if(flag===false){
            alert("invlid")
        }
          
    })