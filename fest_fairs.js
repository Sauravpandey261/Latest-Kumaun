document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.calendar button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            switch (button.id) {
                case 'btn1':
                    JantoMarch();
                    break;
                case 'btn2':
                    ApriltoJune();
                    break;
                case 'btn3':
                    JulyToAug();
                    break;
                case 'btn4':
                    SeptoOct();
                    break;
                case 'btn5':
                    NovtoDec();
                    break;
            }
        });
    });
});



var btn1=document.querySelector("#btn1");

function JantoMarch(){
var events=document.querySelector(".event");
var images=document.querySelector(".img");
var arr=[
    {name:"Uttarayani Fair (Bageshwar)",content:"This fair is very important from historical, religious and traditional point of view and is organized every year on the day of Makar Sankranti in the month of January"},
    {name:"Golnew Mahotsav (Almora)",content:"Every year in the month of February, Golnew Mahotsav is organized in Chittai, Almora district. Grand presentation of cultural programs is done in this three-day festival"},
    {name:"Hatkeshwar, Shivratri Fair (Gangolihat-Pithoragarh)",content:"According to Chapter 106 of Manaskhand of Skandapuran, this fair is organized every year on Shivratri."},
    {name:"Shri Purnagiri Fair (Champawat)",content:"This fair full of religious importance is organized every year after Holi at Purnagiri Temple and Shaktipeeth."},
]
var arr2=[
    {image:"image/jan_mar_img1.jpeg"},
    {image:"image/jan_mar_img2.jpeg"}
    
]
var clutter="";
var imageDiv="";
arr.forEach(function (elem) {
    clutter += ` <h2>${elem.name}</h2>
                <p>${elem.content}</p>`;

  });
arr2.forEach(function(elem2){
    imageDiv+=` <img src="${elem2.image}" alt="">`
})
events.innerHTML = clutter;
images.innerHTML=imageDiv;
}
btn1.addEventListener("click",function(){
    JantoMarch();
})
JantoMarch();
var btn2=document.querySelector("#btn2");
function ApriltoJune(){
var events=document.querySelector(".event");
var images=document.querySelector(".img")
var arr=[
    {name:"Chaiti Fair Kashipur",content:"This religious and culturally important fair is organized every year on 10-11 April. People of Boxatribe participates enthusiastically in this fair."},
    {name:"Thal Fair (Pithoragarh)",content:"This fair of historical and commercial importance is organized every year on 12-15 April at a place called Thal in Pithoragarh district"},
    {name:"Syalve Bikhoti Fair (Almora)",content:"The famous historical Syalve Bikhoti Fair of Almora is famous for its mythological folk culture. It is organized every year on 13–16 April."},
    {name:"Chhaliya Mahotsav (Pithoragarh)",content:"The only Chhaliya Mahotsav celebrated in Uttarakhand from 5-25 May, presents a glimpse of different cultures by the cultural groups of the state. About 50 Chholiya groups of the Kumaon division participate in this event in which mutual competitions are organized. On this occasion, a special presentation of Chholiya dance is performed"},
    {name:"Gangawali Mahotsav (Pithoragarh)",content:"The main objective of this fair, organized between 1-5 June, is to highlight the literary, cultural and historical heritage of the Gangawali region situated between Saryu and Ramganga and to encourage cultural tourism."}
]
var arr2=[
    {image:"image/april_june_img1.jpeg"},
    {image:"image/april_june_img2.avif"}
]
var clutter="";
var imageDiv="";
arr.forEach(function (elem) {
    clutter += ` <h2>${elem.name}</h2>
                <p>${elem.content}</p>`;

  });
arr2.forEach(function(elem2){
    imageDiv+=` <img src="${elem2.image}" alt="">`
})
events.innerHTML = clutter;
images.innerHTML=imageDiv;
}
btn2.addEventListener("click",function(){
    ApriltoJune();
})

var btn3=document.querySelector("#btn3");
function JulyToAug(){
var events=document.querySelector(".event");
var images=document.querySelector(".img")
var arr=[
    {name:"Salam Rang Mahotsav (Almora)",content:"Salam Rang Mahotsav is organized every year between 18-22 July in Salam Patti of Almora district. On this occasion, various types of programs related to folk culture are presented"},
    {name:"Shravani Fair Jageshwar (Almora)",content:"This fair is organized every year on 20-25 July for the purpose of entertainment and business and to introduce the culture of Uttarakhand."},
    {name:"Devi Mahotsav Devidhar(Champawat)",content:"Held every year on 25-30 July.Many exciting cultural activities and various sports activities are organized in Devi Mahotsav.Competitions are organized."},
    {name:'Aashadhi Kaushik "Bagwal" Fair (Champawat)',content:"Aashadhi Kaushik Fair is organized every year on Raksha-Bandhan to keep alive the unique cultural tradition in the historical Kholikhad Durdha Chaud ground of Uttarakhand's famous Shaktipeeth Maa Barahi Dham, Devidhura, district Champawat. The main attraction of this fair is the 'Bhagwal' (stone battle) organized on the day of Raksha-Bandhan in which many people of the area participate by forming armies of their respective caste groups (Khams) and offer Chhatoli of Ringal as pulses. Experiment and have a stone war by throwing stones at each other. It is believed that in this war, the Goddess becomes happy only if blood equal to the blood of a person's body is shed. The priest of Shaktipeeth signals the end of the stone war by shaking the stone."},
    {name:"Hiljatra Mahotsav (Pithoragarh)",content:"Hiljatra is a festival associated with the transplantation of paddy. This festival is celebrated in Pithoragarh district of Uttarakhand. This festival is organized during the rainy season at the time of the transplantation of paddy. Hiljatra festival is celebrated according to folk tales of the victory of gods over demons by masked dancers. This dance is performed by masked dancers. Hiljatra festival is celebrated with great pomp in the entire Pithoragarh district."},
    {name:"Kandali Festival",content:"Kandali festival is celebrated with great pomp in the Pithoragarh district of Uttarakhand. This festival is celebrated with the blooming of Kandali flowers. This festival is celebrated with great pomp every 12 years. Because the Kandali flower blooms once every 12 years. This festival is celebrated between August and October. On this day women symbolically destroy the Kandali flower plant."}
]
var arr2=[
    {image:"image/Hiljatra.jpg"},
    {image:"image/jageshwar2.jpeg"},
    {image:"image/july_aug_img3.jpeg"},
    {image:"image/july_aug_img4.jpg"}
]
var clutter="";
var imageDiv="";
arr.forEach(function (elem) {
    clutter += ` <h2>${elem.name}</h2>
                <p>${elem.content}</p>`;

  });
arr2.forEach(function(elem2){
    imageDiv+=` <img src="${elem2.image}" alt="">`
})
events.innerHTML = clutter;
images.innerHTML=imageDiv;
}
btn3.addEventListener("click",function(){
    JulyToAug();
})

var btn4=document.querySelector("#btn4");
function SeptoOct(){
var events=document.querySelector(".event");
var images=document.querySelector(".img")
var arr=[
    {name:"Shaheed Vivas (Salt Khumad Almora): ",content:"Salt, which was the land of revolution of 1857, has special significance in Uttarakhand. For this reason, Martyr's Day is celebrated here every year on 5th September and cultural programs are also organized in the memory of the martyrs."},
    {name:"Mostamanu Fair (Pithoragarh) ",content:"This religious fair is organized every year on 16 September at Mostamanu Temple in Pithoragarh."},
    {name:"Surya Shashthi Fair (Champawat) ",content:"This fair of religious faith is organized every year on 16-18 September, in which the splendor of mountain folk culture can be seen."},
    {name:"Nanda Devi Fair(Almora, Nanital, Bageshwar)",content:"The historically, religiously and mythologically famous fair of Nanda Devi, organized every year on 18-25 September for 105 years, is celebrated with great enthusiasm."},
    {name:"Rural Himalaya Haat (Satauli- Nainital) ",content:"With the aim of promoting the vanishing folk culture and self-entrepreneurship of the state, Rural Himalaya Haat is organized every year on 15-20 October."}
]
var arr2=[
    {image:"image/sep_oct_img1.jpg"},
    {image:"image/sep_oct_img2.jpg"}
]
var clutter="";
var imageDiv="";
arr.forEach(function (elem) {
    clutter += ` <h2>${elem.name}</h2>
                <p>${elem.content}</p>`;

  });
arr2.forEach(function(elem2){
    imageDiv+=` <img src="${elem2.image}" alt="">`
})
events.innerHTML = clutter;
images.innerHTML=imageDiv;
}
btn4.addEventListener("click",function(){
    SeptoOct();
})

var btn5=document.querySelector("#btn5");
function NovtoDec(){
var events=document.querySelector(".event");
var images=document.querySelector(".img")
var arr=[
    {name:"Deep Mahotsav (Champawat) ",content:" Every year on the occasion of Diwali, Deep Mahotsav is organized in Kheti Khan between 9-10 November. Various cultural programs are organized on this occasion"},
    {name:"Jauljivi Fair (Pithoragarh) ",content:"Jauljivi Fair is organized every year from 14-21 November in Jauljivi, the confluence of Kali River and Gori Ganga, in which programs related to regional culture are presented.A large number of spectators and tourists come to the fair."},
    {name:"Atriya Fair (Rudrapur)",content:"This fair of historical and mythological importance is organized every year in the month of November since the time of some kings of Kumaon. People from both hilly and plain areas participate in this fair."},
    {name:"Kanalichhina Mahotsav (Pithoragarh) ",content:"This fair is organized every year from 30 November to 4 December to present the folk cultural heritage of Kumaon to the people."},
    {name:"Shaheed Udham Singh Mahotsav (Rudrapur)",content:"This fair is organized every year on 24-27 December in the memory of the great son of Mother India, Shaheed Udham Singh Ji."},
   
]
var arr2=[
    {image:"image/nov_dec_img1.jpeg"},
    {image:"image/nov_dec_img2.jpg"}
]
var clutter="";
var imageDiv="";
arr.forEach(function (elem) {
    clutter += ` <h2>${elem.name}</h2>
                <p>${elem.content}</p>`;

  });
arr2.forEach(function(elem2){
    imageDiv+=` <img src="${elem2.image}" alt="">`
})
events.innerHTML = clutter;
images.innerHTML=imageDiv;
}
btn5.addEventListener("click",function(){
    NovtoDec();
})



var stopRunDropdown = function() {
    if(window.innerWidth >= 770) {
        gsap.to(".mainnav", {
            backgroundColor: "white",
            color: "black",
            duration: 0.5,
            height: "110px",
            scrollTrigger: {
                trigger: ".nav",
                scroller: "body",
                start: "top -10%",
                end: "top -9%",
                scrub: 1
            }
        });
    } else {
        gsap.to(".mainnav", {
            backgroundColor: "white",
            color: "black",
            duration: 0.5,
            height: "80px",
            scrollTrigger: {
                trigger: ".nav",
                scroller: "body",
                start: "top -10%",
                end: "top -9%",
                scrub: 1
            }
        });
    }
};

// Call the function initially
stopRunDropdown();

// Add event listener for window resize
window.addEventListener('resize', stopRunDropdown);
gsap.to(".middle a",{
    color:"black",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end:"top -9%",
        scrub:1
    }
})
gsap.to(".maindropdownmenu",{
    backgroundColor: "rgba(79, 174, 128, 0.513)",
    color:"white",
    duration:0.5,
    scrollTrigger:{
        trigger:".maindropdownmenu",
        scroller:"body",
        start:"top -5%",
        end:"top -9%",
        scrub:1
    }
})