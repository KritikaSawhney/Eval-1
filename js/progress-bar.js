window.onscroll = function() {scrollProgress()};

function scrollProgress() {
const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrolled = (winScroll / height) * 100;
document.getElementById("progress-bar").style.width = scrolled + "%";
}