var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

window.onload = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    let scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; // Adjust the multiplier to control the speed
});
