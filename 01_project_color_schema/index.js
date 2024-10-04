document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".color-box");
    const body = document.querySelector("body");
    const originalBodyColor = window.getComputedStyle(body).backgroundColor;
  
    boxes.forEach(function(colorBox) {
      colorBox.addEventListener("click", function(event) {
        const bgColor = window.getComputedStyle(this).backgroundColor;
        body.style.backgroundColor = bgColor;
  
        event.stopPropagation();
      });
    });
  
    document.addEventListener("click", function() {
      body.style.backgroundColor = originalBodyColor;
    });
  });
  