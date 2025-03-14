
// Locomotive Js With ScrollTriger Github code 

function Locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
Locomotive();





// Mouse Move And Chapta 

function circleChapta() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  var timeout;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.6, 1.3, Math.abs(dets.x - xprev) * 0.07 + 0.8);
    yscale = gsap.utils.clamp(0.6, 1.3, Math.abs(dets.y - yprev) * 0.07 + 0.8);

    xprev = dets.x;
    yprev = dets.y;

    Curser(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        ".curser"
      ).style.transform = `translate(${dets.x - 5}px, ${dets.y - 5}px) scale(1, 1)`;
    }, 100);
  });
}
function Curser(xscale, yscale) {
  var crsr = document.querySelector(".curser");

  document.addEventListener("mousemove", function (dets) {
    requestAnimationFrame(() => {
      crsr.style.opacity = "1";
      crsr.style.transform = `translate(${dets.x - 5}px, ${dets.y - 5}px) scale(${xscale}, ${yscale})`;
    });
  });
}
Curser()
circleChapta();






// DeskTop Divice manu click animation 

function DeskTopManu() {
  var DskButton = document.querySelector(".navDiv .nav_manu #Desktop_Button");
  var DeskUl = document.querySelectorAll(".navDiv .nav_manu .nav_manu_ul li");

  var tl = gsap.timeline();

  tl.to(".navDiv .nav_manu_ul", {
    opacity: 1,
  });
  tl.from(
    ".navDiv .nav_manu_ul li",
    {
      y: -10,
      duration: 0.3,
      stagger: 0.1,
      opacity: 0,
      ease: "power3.out",
    },
    "UpDown"
  );
  tl.to(
    ".navDiv .nav_manu #Desktop_Button",
    {
      y: 20,
      duration: 0.1,
      opacity: 0,
    },
    "UpDown"
  );

  tl.pause();

  DskButton.addEventListener("click", function () {
    tl.play();
  });

  DeskUl.forEach(function (item) {
    item.addEventListener("click", function () {
      tl.reverse();
    });
  });
}

// Mobile Divice Manu click animation

function DropDownAnimaton() {
  var ResponsiveButton = document.querySelector(
    ".hero nav .nav_manu #Responsive_Button"
  );
  var DropDownNav = document.querySelector(
    ".navDiv .Dropdown_nav #Responsive_crose"
  );

  var tl2 = gsap.timeline();

  tl2.to(".Dropdown_nav", {
    top: 0,
    duration: 0.4,
    opacity: 1,
    ease: "power3.out",
  });
  tl2.from(" .Dropdown_Head a, .Dropdown_Head #Responsive_crose", {
    y: -30,
    opacity: 0,
    duration: 0.2,
    ease: "power3.out",
  });
  tl2.to(".Dropdown_nav .Dropdown_ul li a", {
    top: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.1,
    ease: "power3.out",
  });
  tl2.to(".Dropdown_nav .Dropdown_Top_Social a", {
    top: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.1,
    ease: "power3.out",
  });

  tl2.from(" .Dropdown_nav .Dro_Footer_bottom", {
    y: 30,
    opacity: 0,
    duration: 0.2,
    ease: "power3.out",
  });

  tl2.pause();

  ResponsiveButton.addEventListener("click", function () {
    tl2.play();
  });
  DropDownNav.addEventListener("click", function () {
    tl2.reverse();
  });
}

// Hero Section Restart animation

function HeroAnimation() {
  var tl3 = gsap.timeline();

  tl3.from(".hero nav .LogoContainer a, .hero .nav_manu button", {
    y: 100,
    duration: 0.8,
  });

  tl3.from(
    ".hero .HedingText .HT_top h1",
    {
      y: 200,
      duration: 0.5,
      
    },
    "same"
  );
  tl3.from(
    ".hero .HedingText .HT_bottom h1, .hero .HedingText .HT_bottom p",
    {
      y: 200,
      duration: 0.5,
      
    },
    "same"
  );

  tl3.from(
    ".hero .FullTime h5",
    {
      y: -150,
      duration: 0.6,
    },
    "heroBottom"
  );

  tl3.from(
    ".hero .HeroBottom ul li",
    {
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    },
    "heroBottom+=0.5"
  );
}

//Elem Section Mouse Move Animation

function ElemSection(){
  document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var deffrot = 0;
  
    elem.addEventListener("mousemove", function(dets){
      var deff = dets.clientY - elem.getBoundingClientRect().top;
  
      deffrot = dets.clientX - rotate;
      rotate = dets.clientX;
  
      gsap.to(elem.querySelector(".imgBox"), {
        opacity: 1,
        ease: Power3,
        top: deff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, deffrot * 0.5)
      });
    });
  
    elem.addEventListener("mouseleave", function(){
      gsap.to(elem.querySelector(".imgBox"), {
        opacity: 0,
        ease: Power3, 
        rotate: gsap.utils.clamp(0, 0, deffrot * 0.5)
      });
    });
  
    // Mouseenter ইভেন্ট: h1 সরবে
    elem.addEventListener("mouseenter", function(){
      gsap.to(elem.querySelector("h1"), {
        marginLeft: "30px",
        duration: 0.2,
        opacity: 0.2,
  
          });
    });
  
    // Mouseleave ইভেন্ট: h1 আগের অবস্থানে ফিরে যাবে
    elem.addEventListener("mouseleave", function(){
      gsap.to(elem.querySelector("h1"), {
        marginLeft: "0px",
        duration: 0.3,
        opacity: 0.7,
      });
    });
  });
  
}


DeskTopManu();
DropDownAnimaton();
HeroAnimation();
ElemSection()













//Bangadesh Live Time 
function updateBDTime() {
  var now = new Date();

  var options = {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  var bdTime = now.toLocaleTimeString("en-US", options);

  document.getElementById("bdTime").innerHTML = bdTime + " BD";
}
setInterval(updateBDTime, 1000);
updateBDTime();

