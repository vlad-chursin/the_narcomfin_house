document.addEventListener('DOMContentLoaded', function() { document.querySelectorAll('.sidebar a').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) { e.preventDefault();
    let scrollTo = this.getAttribute('href');
    let whitespace = scrollTo === '#s1' ? 70 : 30;
    let targetPosition = document.querySelector(scrollTo).offsetTop - whitespace;
    window.scrollTo({ top: targetPosition, behavior: 'smooth'
    }); });
    }); });