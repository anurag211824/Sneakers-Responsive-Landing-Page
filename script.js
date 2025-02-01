const menuButton = document.querySelector(".Humburger-menu");
const sidebar = document.querySelector(".sidebar");
const closeBtn=document.querySelector('.close-btn');

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
   
  const icon = document.querySelector('.icon');

  icon.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  
    if (document.body.classList.contains('dark-theme')) {
      icon.src = 'images/sun.png';
    } else {
      icon.src = 'images/moon.png';
    }
  });
  