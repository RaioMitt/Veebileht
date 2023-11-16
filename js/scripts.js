// Autor: Osvald
// Peida külgriba kui alla kerida
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    let startUpScroll = 0;
    const scrollHideThreshold = 300; // piir millest all pool külgriba peita
    const scrollShowThreshold = 300; // kui palju üles kerida et külgriba näidata
    const sidebar = document.getElementById('sidenav');
 
    window.addEventListener('scroll', function() {
      let currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        // alla kerides
        startUpScroll = currentScroll;
        if (currentScroll > scrollHideThreshold) {
            sidebar.classList.add('inactive'); // peida külgriba
        }
      } else if (startUpScroll - currentScroll > scrollShowThreshold) {
        // üles kerides
        sidebar.classList.remove('inactive'); // näita külgriba
      };
      lastScrollTop = currentScroll;
    }, false);
 });