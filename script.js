// watch the leaf --------

$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  console.log(x + "," + y);                             
  
  $("#leaf").css("left",x+"px");
  $("#leaf").css("top",y+"px");
  
  if (x < $(window).width()/2 -50){
      $("#cat").attr("src","https://i.imgur.com/U9xHHEK.png")
      }
  if (x > $(window).width()/2 +50){
      $("#cat").attr("src","https://i.imgur.com/VDQeIOu.png")
      } 
  if ( Math.abs(x - $(window).width()/2) <50){
      $("#cat").attr("src","https://i.imgur.com/ksEDpoi.png")
      }
  
  if (x < $(window).width()/2 -50 && y<$(window).height()/2){
 
 $("#cat").attr("src","https://i.imgur.com/GY1hnW0.png")   
  }
 
  if (x > $(window).width()/2 +50 && y<$(window).height()/2){
 
 $("#cat").attr("src","https://i.imgur.com/bgDgkAK.png")   
  }
   
});

// shocked cat situation ------------

const CAT_SHOCKED_SRC = "https://i.imgur.com/Vgjahec.png";
const CAT_DEFAULT_SRC = "https://i.imgur.com/Wpyzie3.png"; // your neutral/center cat

let eyeClosed = true;
let pwFocused = false;

function updateCat() {
  const shocked = eyeClosed || pwFocused;

  if (shocked) {
    $("#cat").addClass("shocked").attr("src", CAT_SHOCKED_SRC);
  } else {
    $("#cat").removeClass("shocked").attr("src", CAT_DEFAULT_SRC);
  }
}

$(".toggle-password")
  .addClass("closed")
  .attr("aria-pressed", "true");
$("#password").attr("type", "password");
updateCat();

$(".toggle-password").on("click", function () {
  $(this).toggleClass("closed");
  eyeClosed = $(this).hasClass("closed");

  $("#password").attr("type", eyeClosed ? "password" : "text");

  updateCat();
});

$("#password")
  .on("focus", function () {
    pwFocused = true;
    updateCat();
  })
  .on("blur", function () {
    pwFocused = false;
    updateCat();
  })
  .on("input", function () {
   });

$(window).on("mousemove", function (e) {
  if (eyeClosed || pwFocused) return;

});

// password toggle

const toggleBtn = document.querySelector('.toggle-password');
const pwd = document.querySelector('#password');

if (toggleBtn && pwd) {
  toggleBtn.addEventListener('click', () => {
    const show = pwd.type === 'password';
    pwd.type = show ? 'text' : 'password';
    toggleBtn.classList.toggle('active', show);
    toggleBtn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });
}