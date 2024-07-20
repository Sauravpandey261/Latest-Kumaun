document.querySelectorAll(".sideaboutdiv").forEach((div) => {
    div.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        const icon = this.querySelector("i");
        
        if (dropdown.style.display === "flex") {
            dropdown.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            dropdown.style.display = "flex";
            icon.style.transform = "rotate(180deg)";
        }
    });
});

var menuicon = document.querySelector("#menuicon");
var closeicon = document.querySelector(".closeicon");

var showsidebar = function () {
gsap.to(".sidebar", {
  x: "-100%",
  duration: 0.4,
});
};
var closesidebar = function () {
gsap.to(".sidebar", {
  x: "0%",
  duration: 0.4,
  delay: 0,
});
};
menuicon.addEventListener("click",function(){
showsidebar()
})
closeicon.addEventListener("click",function(){
closesidebar()
})
