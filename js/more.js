// Autor: Osvald
// Plaadigalerii ja töötav jukebox!

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
    
    
    // plaat vajutades liigub hiirega
    let floatingDisc = null;
    function addDisc(event, name) {
        floatingDisc = document.createElement('img');
        floatingDisc.style.position = 'absolute';
        floatingDisc.style.width = '200px';
        floatingDisc.style.height = 'auto';
        floatingDisc.src = `../assets/images/disc-${name}.png`;
        floatingDisc.style.zIndex = 100;
        floatingDisc.style.pointerEvents = 'none';
        document.body.appendChild(floatingDisc);
        moveDisc(event);
        document.addEventListener('mousemove', moveDisc);
        document.addEventListener('mousedown', removeDisc);
    }
    function moveDisc(event) {
        // liiguta plaati
        floatingDisc.style.left = event.pageX - 100 + 'px';
        floatingDisc.style.top = event.pageY - 63 + 'px';
    }
    function removeDisc() {
        if (floatingDisc) {
            floatingDisc.remove();
            floatingDisc = null;
            document.removeEventListener('mousemove', moveDisc);
            document.removeEventListener('mousedown', removeDisc);
        }
    }
    
    const galleryDiscs = document.querySelectorAll('.gallery-item');
    galleryDiscs.forEach(disc => {
        disc.addEventListener('click', function(event) {
            const name = this.querySelector('img').alt;
            const mp3 = `../assets/audio/${name}.mp3`;
            // lisa plaat
            addDisc(event, name);
            // salvesta lugu attribuudiga
            document.body.setAttribute('data-disc-mp3', mp3);
    });
});

// mängi lugu kui vajutada plaadimängijale
let track = null;
const jukebox = document.getElementById('jukebox');
const note = document.getElementById('note');
jukebox.addEventListener('click', function() {
    // kui mõni lugu juba mängib siis pane see kinni
    if (track && !track.paused) {
        track.pause();
        note.style.display = 'none';
    }
    const mp3 = document.body.getAttribute('data-disc-mp3');
    // kui lugu on seatud siis mängi
    if (mp3) {
        track = new Audio(mp3);
        track.play();
        document.body.removeAttribute('data-disc-mp3');
        note.style.display = 'block';
        track.onended = function() {
            note.style.display = 'none';
        }
    }
});
});