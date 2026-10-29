
var scrollLinks = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener('click', function (e) {
    e.preventDefault();
    
    var id = this.getAttribute('href');
    if (id == '#') {
      return;
    }
    
    var target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}
