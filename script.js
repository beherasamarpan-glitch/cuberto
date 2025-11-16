
Shery.mouseFollower();
Shery.makeMagnet(".magnet");


Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./1.mp4", "./2.mp4", "./3.mp4"],
});

-
gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: "power1",
});

let sections = document.querySelectorAll(".fleftelm");


Shery.imageEffect(".images", {
    style: 4,
    slideStyle: (setScroll) => {
        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog) {
                    setScroll(prog.progress + index);
                }
            });
        });
    },
});

//MOBILE FIXES 


if (window.innerWidth < 768) {
    ScrollTrigger.getAll().forEach(t => t.kill());

    
    gsap.utils.toArray(".fleftelm").forEach((elm) => {
        gsap.from(elm, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: elm,
            }
        });
    });
}
