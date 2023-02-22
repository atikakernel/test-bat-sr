document.addEventListener("DOMContentLoaded", function(event) {
  var navbarLinks = document.querySelectorAll("#navbarTogglerDemo02 a");

  for (var i = 0; i < navbarLinks.length; i++) {
    console.log(navbarLinks[i].getAttribute("href"));
  }
});
