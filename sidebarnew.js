
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