function Locomotive() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
Locomotive()


function updateBDTime() {
  var now = new Date();

  var options = {
    timeZone: 'Asia/Dhaka',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  var bdTime = now.toLocaleTimeString('en-US', options);

  document.getElementById("bdTime").innerHTML = bdTime + " BD";
}


setInterval(updateBDTime, 1000);
updateBDTime();




function DeskTopManu() {

  var DskButton = document.querySelector(".navDiv .nav_manu #Desktop_Button")
  var DeskUl = document.querySelectorAll(".navDiv .nav_manu .nav_manu_ul li")


  var tl = gsap.timeline()

  tl.to(".navDiv .nav_manu_ul", {
    opacity: 1,
  })
  tl.from(".navDiv .nav_manu_ul li", {
    y: -10,
    duration: 0.3,
    stagger: 0.1,
    opacity: 0,
    ease: "power3.out"
  }, "UpDown")
  tl.to(".navDiv .nav_manu #Desktop_Button", {
    y: 20,
    duration: 0.1,
    opacity: 0
  }, "UpDown")


  tl.pause();

  DskButton.addEventListener("click", function () {
    tl.play()
  })

  DeskUl.forEach(function (item) {
    item.addEventListener("click", function () {
      tl.reverse();
    });
  });

}

function DropDownAnimaton() {
  var ResponsiveButton = document.querySelector(".hero nav .nav_manu #Responsive_Button")
  var DropDownNav = document.querySelector(".navDiv .Dropdown_nav #Responsive_crose")


  var tl2 = gsap.timeline()

  tl2.to(".Dropdown_nav", {
    top: 0,
    duration: 0.4,
    opacity: 1,
    ease: "power3.out"
  })
  tl2.from(" .Dropdown_Head a, .Dropdown_Head #Responsive_crose", {
    y: -30,
    opacity: 0,
    duration: 0.2,
    ease: "power3.out"
  })
  tl2.to(".Dropdown_nav .Dropdown_ul li a", {
    top: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.1,
    ease: "power3.out"
  })
  tl2.to(".Dropdown_nav .Dropdown_Top_Social a", {
    top: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.1,
    ease: "power3.out"
  })

  tl2.from(" .Dropdown_nav .Dro_Footer_bottom", {
    y: 30,
    opacity: 0,
    duration: 0.2,
    ease: "power3.out"
  })


  tl2.pause()

  ResponsiveButton.addEventListener("click", function () {
    tl2.play()

  })
  DropDownNav.addEventListener("click", function () {
    tl2.reverse()

  })


}

DeskTopManu()
DropDownAnimaton()


