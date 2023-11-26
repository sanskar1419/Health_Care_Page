console.log("File is connected");

var navMenuAnchorTag = document.querySelectorAll(".nav-menu a");
var interval;
for (let i = 0; i < navMenuAnchorTag.length; i++) {
  navMenuAnchorTag[i].addEventListener("click", function (event) {
    console.log(event);
    event.preventDefault(); // To prevent the default behaivior of the particular element
    var targetsectioId = this.textContent.trim();
    var targetSection = document.getElementById(targetsectioId);
    // interval = setInterval(verticalScroll, 20, targetSection);
    interval = setInterval(function () {
      verticalScroll(targetSection);
    }, 20);
  });

  function verticalScroll(targetSection) {
    var targetsectioncordinate = targetSection.getBoundingClientRect();
    if (targetsectioncordinate.top <= 0) {
      clearInterval(interval);
      return;
    }
    window.scrollBy(0, 50);
  }
}
