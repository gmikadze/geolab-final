var menus = document.getElementsByClassName('hamburger-menu');

[].forEach.call(menus, function (m) {
    m.addEventListener('click', function () {
        m.classList.toggle('open');
    });
});

      //scroll hiding top
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}