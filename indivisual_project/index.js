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

// offer just for you 

let data2=[
    {img:"https://cms-contents.pharmeasy.in/offer/37c262d84a5-25.jpg?dim=60x0&dpr=1.3249999284744263&q=100",
    p1:"Flat 25% OFF",
    code:"Code: GIFT25",
    },
    {img:"https://cms-contents.pharmeasy.in/offer/81308cc59b5-FLAT_20.jpg?dim=60x0&dpr=1.3249999284744263&q=100",
    p1:" Test-Flat 20% OFF + ut to Rs.1000 surprise cashback",
    code:"Code: MEGA20",
    },
    {img:"https://cms-contents.pharmeasy.in/offer/9504ed92881-flat22offer.jpg?dim=60x0&dpr=1.3249999284744263&q=100",
    p1:"Flat 22% OFF + up to Rs.1000 surprise cashback",
    code:"Code: 22MEDI",
    },
    {img:"https://cms-contents.pharmeasy.in/offer/2846076d5d2-Diagnostics-10-min.png?dim=60x0&dpr=1.3249999284744263&q=100",
    p1:"Order medicines and get Flat 400 OFF on...",
    code:"Code: CARE4U",
    },
]

let BottomContainer=document.querySelector("#OfferBottom");

data2.forEach(function(ele){
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");

    let image=document.createElement("img");
    image.src=ele.img;

    let p1=document.createElement("p");
    p1.innerText=ele.p1;

    let code=document.createElement("p");
    code.innerText=ele.code;

    div2.append(image);
    div3.append(p1,code);
    div1.append(div2,div3);
    BottomContainer.append(div1);
});

// Featured Brands

let data3=[
    "https://cms-contents.pharmeasy.in/carousel_item/1f27723d1f3-Glucon-D.jpg?dim=146x0&dpr=1.3249999284744263&q=100",
    "https://cms-contents.pharmeasy.in/carousel_item/7326ee948ff-web_Himalaya.jpg?dim=146x0&dpr=1.3249999284744263&q=100",
    "https://cms-contents.pharmeasy.in/carousel_item/d5f9240e29a-SUGARFREE.png?dim=146x0&dpr=1.3249999284744263&q=100",
    "https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1.3249999284744263&q=100",
    "https://cms-contents.pharmeasy.in/carousel_item/c72feb4bd7a-web_Huggies.jpg?dim=146x0&dpr=1.3249999284744263&q=100",
    "https://cms-contents.pharmeasy.in/carousel_item/729f07d6c49-04.jpg?dim=146x0&dpr=1.3249999284744263&q=100",
    "https://cms-contents.pharmeasy.in/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1.3249999284744263&q=100",
    "https://cms-contents.pharmeasy.in/carousel_item/ac01791d842-Featured-banner_Volini.png?dim=146x0&dpr=1.3249999284744263&q=100"
];

let brandContainer=document.querySelector("#Brands");

data3.forEach(function(ele){
  let div = document.createElement("div");

  let image = document.createElement("img");
  image.src = ele;

    div.append(image);
    brandContainer.append(div);
});

// Health Articles

let data4=[
    {image:"https://blog-images.pharmeasy.in/2022/07/18132435/Blog-Image-18-july-01.jpg?dim=0x230&dpr=1.3249999284744263&q=100",
    heading:"What Is Syphilis? Read This Blog To Know More",
    p1:"Table of Contents Stages of SyphilisWhat causes Syphilis?Risk factors of SyphilisWhat signs do you have of Syphilis?How does Syphilis get treated?How can Syphilis be prevented? Syphilis is A potentially fatal sexually transmitted infection(STI). It can be transmitted through sexual or close contact with an infected person. Syphilis, if left untreated, can cause blindness, heart problems.",
    p2:"Read More >"},
    {image:"https://blog-images.pharmeasy.in/2022/07/18143950/Blog-Image-18-july-02.jpg?dim=0x230&dpr=1.3249999284744263&q=100",
    heading:"All You Need To Konw About Common sexually Trans..",
    p1:"Table of Contents What causes sexually transmitted diseases?Common STD symptomsHIV/AIDSGenital herpesChlamydiaSyphilisVaginal candidiasisPredisposed persons are females with–Symptoms include–Conclusion Sexually transmitted diseases or STDs are diseases that spread from person to person via sexual intercourse or contact. In other words, these infections or diseases can spread through vaginal, anal or even oral sex. However, the spreading of ",
    p2:"Read More >"
    },
    {image:"https://blog-images.pharmeasy.in/2022/07/18013014/18.jpg?dim=0x230&dpr=1.3249999284744263&q=100",
    heading:"Best Home Remedies For Thick Eyebrows",
    p1:"Table of Contents Introduction:&nbsp;What Causes Thin Eyebrows?Symptoms of Thin Eyebrows:Home Remedies for Thick Eyebrows:When to Seek Medical Help?Conclusion:Frequently Asked Questions:References: Introduction:&nbsp; Eyebrows are like the crowns of our eyes. They are not accessories; they play an important role in preventing sweat from trickling down into our eyes. In addition, they also protect the bony ridges ",
    p2:"Read More >"
    }
];


let HealthContainer=document.querySelector("#Health-ArticlesContent");

data4.forEach(function(ele){
let div=document.createElement("div");

let image=document.createElement("img");
image.src=ele.image;

let heading=document.createElement("p");
heading.innerText=ele.heading;

let div2=document.createElement("div");

let p1=document.createElement("p"); 
p1.innerText=ele.p1;

let p2=document.createElement("p"); 
p2.innerText=ele.p2;

div2.append(p1)
div.append(image,heading,div2,p2);
HealthContainer.append(div);
});


// why choose us

let data5=[
    {image:"https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg",
    heading:"32 Million+",
    p:"Registered users as of Mar 31, 2022"},
    {image:"https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg",
    heading:"36 Million+",
    p:"Orders on Pharmeasy till date"},
    {image:"https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg",
    heading:"99000+",
    p:"Unique item sold last 3 months"},
    {image:"https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg",
    heading:"19500+",
    p:"Pin codes serviced last 3 months"}
];

let whyChooseContainer=document.querySelector("#WhyChoose-UsContent");

data5.forEach(function(ele){
    let div=document.createElement("div");

    let image=document.createElement("img");
    image.src=ele.image;

    let p1=document.createElement("p");
    p1.innerText=ele.heading;

    let p2=document.createElement("p");
    p2.innerText=ele.p;

    div.append(image,p1,p2);
    whyChooseContainer.append(div);
})

// What our customers have to say

let data6=[
    {h1:"Debanjan Roy",
    date:"April 18, 2020",
    image:"https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    description:"Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer."
    },
    {h1:"Rohini Sarkar",
    date:"April 21, 2020",
    image:"https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    description:"Very helpful and friendly app in terms of usability, customer support &amp; money saving from the point of medical necessity of every person."
    },
    {h1:"Varun Sonagra",
    date:"April 23, 2020",
    image:"https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    description:"I've had a good experience. The consultation with a doctor feature works well too. The prices and discounts are great too. Overall the simplicity of the app is a plus too. I recommend this app. Will always be a customer/user now! Genuinely!"
    },
    {h1:"Rajarshi Sarkar",
    date:"April 22, 2020",
    image:"https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    description:"The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
    }
];

let customerContainer=document.querySelector("#CustomersContent");

data6.forEach(function(ele){
    let div=document.createElement("div");

    let h1=document.createElement("h1");
    h1.innerText=ele.h1;

    let p1=document.createElement("p");
    p1.innerText=ele.date;

    let div1=document.createElement("div");

    let image=document.createElement("img");
    image.src=ele.image;

    let p2=document.createElement("p");
    p2.innerText=ele.description;

    div1.append(image,p2);
    div.append(h1,p1,div1);
    customerContainer.append(div);
})