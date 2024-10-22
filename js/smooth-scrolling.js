
window.onscroll = function () {
  let progressBar = document.getElementById('progress-bar');
  let scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (document.documentElement.scrollTop / scrollTotal) * 100;
  progressBar.style.width = scrolled + "%";
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
