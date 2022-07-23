let cartData=JSON.parse(localStorage.getItem("cartItems"))||[];
   
    
    let displaySum=document.querySelector("#count");
    
    let totalprice= document.querySelector("#totalPrice");
    
    displaycart(cartData)
    function displaycart(cartData){
        document.querySelector("#container").innerHTML="";
        let total=0;
        let sum=0;

        cartData.forEach(function(ele,index){
            sum++;
            total+=(+ele.price);
            let div0=document.createElement("div");
            div0.setAttribute("id","maindiv");

            let div1=document.createElement("div");

            let img=document.createElement("img");
            img.src=ele.image_url;
            
            let name=document.createElement("p");
            name.innerText=ele.name;

            let price=document.createElement("p");
            price.innerText="₹"+ele.price
            
            
            let erase=document.createElement("button");
            erase.addEventListener("click",function(){
                removeItem(ele,index)
            })
            erase.innerText="Remove from Cart"


            div1.append(img);
            div0.append(div1,name,price,erase)
            document.querySelector("#container").append(div0)
        });
        displaySum.innerText=sum;
        totalprice.innerText=total;
    }

    function removeItem(ele,index){
        cartData.splice(index,1);
        localStorage.setItem("cartItems",JSON.stringify(cartData));
        displaycart(cartData);
    }
