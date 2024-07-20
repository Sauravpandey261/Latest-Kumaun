let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
var main=document.querySelector(".main")
var cursor= document.querySelector(".mousecursor")
var imageDivs = document.querySelectorAll(".aboutimgcont")


// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


var stopRunDropdown = function() {
    console.log(window.innerWidth)
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

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"power2.",
        duration:0.5
    })
})

imageDivs.forEach(function(imageDiv) {
    imageDiv.addEventListener("mouseenter", function() {
        cursor.innerHTML = "View More";
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: "#ffffffA5",
            color: "#333",
            ease:"power1.out",
            duration:0.5
        });
        gsap.to(imageDiv.querySelector("img"), {
            scale: 1.2,
            ease: "power1.out",
            duration: 0.5
        });
    });

imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor:"rgba(0, 0, 0, 0.677)",
        ease: "power2.out",
        duration: 0.3
    });
    gsap.to(imageDiv.querySelector("img"), {
        scale: 1,
        ease: "power2.out",
        duration: 0.5
    });
 })
});
