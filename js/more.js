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

    // plaadid vajutatavaks
    const galleryDiscs = document.querySelectorAll('.gallery-item');
    galleryDiscs.forEach(disc => {
        disc.addEventListener('click', function() {
            const name = this.querySelector('img').alt;
            const mp3 = `../assets/audio/${name}.mp3`;
            console.log(mp3);

            // võta plaat hiirega kaasa
            document.body.style.cursor = `url('../assets/images/disc-${name}.png'), auto`;
            console.log(document.body.style.cursor);
            document.body.setAttribute('data-disc-mp3', mp3);
        });
    });

    // mängi lugu kui vajutada plaadimängijale
    let track = null;
    const jukebox = document.getElementById('jukebox');
    jukebox.addEventListener('click', function() {
        // kui mõni lugu juba mängib siis pane see kinni
        if (track && !track.paused) {
            track.pause();
        }
        const mp3 = document.body.getAttribute('data-disc-mp3');
        if (mp3) {
            track = new Audio(mp3);
            track.play();

            document.body.style.cursor = 'auto';
            document.body.removeAttribute('data-disc-mp3');
        }
    });
});