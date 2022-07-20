let imageLinks=[
    "https://cms-contents.pharmeasy.in/banner/c414a98e027-dwebjpg.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/3f636edf697-GRAND1000_Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/31e6940d27f-WP.jpg?dim=1440x0&dpr=1&q=100"
    ];

    
// crouser button;

let leftButton=document.querySelector("#leftBtn");
let rightButton=document.querySelector("#rightBtn")
let image=document.querySelector("#Crouse")

let imageCount=0;

leftButton.addEventListener("click",function(){
imageCount--;
if(imageCount===-1){
    imageCount=imageLinks.length-1;
}
image.src=imageLinks[imageCount];
});

rightButton.addEventListener("click",function(){
    imageCount++;
if(imageCount===imageLinks.length){
    imageCount=0;
}
image.src=imageLinks[imageCount];
})

// container1
let data1=[
    {
        text1:"FLAT 15% OFF",
        category:"Order Medicines",
        image:"https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1.3249999284744263&q=100",
        buttontext:"Order Now"
    },
    {
        text1:"UPTO 60% OFF",
        category:"Healthcare Product",
        image:"https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1.3249999284744263&q=100",
        buttontext:"Order Now"
    },
    {
        text1:"UPTO 70% OFF",
        category:"Lab Tests",
        image:"https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1.3249999284744263&q=100",
        buttontext:"Book Now"
    },

]
let container1=document.querySelector("#container1");

data1.forEach(function(ele){
    let div1=document.createElement("div");
    let div2=document.createElement("div");

    let text1=document.createElement("p");
    text1.innerText=ele.text1;

    let category=document.createElement("h1");
    category.innerText=ele.category;

    let img=document.createElement("img");
    img.setAttribute("src",ele.image);

    let button=document.createElement("button");
    button.innerText=ele.buttontext;

    div2.append(text1,category)
    div1.append(div2,img,button)
    container1.append(div1);
})