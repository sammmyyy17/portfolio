document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.getElementById("typewriter-text");

    let text = `I Build Awesome <span class="highlight">Web</span> <br> 
                <span class="lower">Applications</span>`;
    
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            textElement.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(typeEffect, 30); // Speed of typing
        }
    }

    typeEffect();
});


function copy() {
const email = "samarthlavekar1703@gmail.com";
    navigator.clipboard.writeText(email).then(()=> {
        console.log("Email copied to clipboard");
    }
    );
}



  var video = document.getElementById("myVideo");

  video.addEventListener("timeupdate", function () {
    localStorage.setItem("videoTime", video.currentTime);
  });

  window.onload = function () {
    var savedTime = localStorage.getItem("videoTime");
    if (savedTime) {
      video.currentTime = savedTime;
    }
    video.play().catch(error => console.log("Autoplay blocked:", error));
  };
