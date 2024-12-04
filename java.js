function resume() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");
    
    alert(
            "Thank you, " +
            name +
            " ! You'll recieve the resume on your email "

        );
}

let resumeButton = document.querySelector(" button");
resumeButton.addEventListener("click", resume);



var typed = new Typed('#element', {
    strings: ['Web Developer'],
    typeSpeed: 125,
    backspeed: 120,
    loop: true,
});



const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#d90400",
     "#d90400", 
     "#e03400", 
     "#e74d00",
     "#e74d00",
     "#e74d00", 
     "#ed6300", 
     "#f27700", 
     "#f68a00", 
     "#f99d00", 
     "#fcaf00",
     "#fcaf00",
     "#fcaf00", 
     "#fec100", 
     "#ffd200", 
     "#ffe400", 
     "#fff521",
     "#fff521",
     "#fff521"
  ];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });
  
  window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
  });
  
  function animateCircles() {
    
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      
      circle.style.scale = (circles.length - index) / circles.length;
      
      circle.x = x;
      circle.y = y;
  
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
   
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();



function hireme() {
    let name = prompt("What is your name?");
    
    alert(
            "Thank you, " +
            name +
            "! You can connect with me through gmail, ashree@gmail.com "

        );
}
let button2 = document.querySelector("a[href='']");
button2.addEventListener("click", hireme);