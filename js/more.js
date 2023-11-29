document.addEventListener('DOMContentLoaded', function() {
    const scrollAmount = 300;  // kui palju korraga kerida
    // paremale nupp
    document.getElementById('next-button').addEventListener('click', function() {
        const gallery = document.getElementById('gallery');
        gallery.scrollLeft += scrollAmount;
    });
    // vasakule nupp
    document.getElementById('back-button').addEventListener('click', function() {
        const gallery = document.getElementById('gallery');
        gallery.scrollLeft -= scrollAmount;
    });
});