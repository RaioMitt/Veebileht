document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('next-button').addEventListener('click', function() {
        const gallery = document.getElementById('gallery');
        gallery.scrollLeft += 300;
    });
    document.getElementById('back-button').addEventListener('click', function() {
        const gallery = document.getElementById('gallery');
        gallery.scrollLeft -= 300;
    });
});