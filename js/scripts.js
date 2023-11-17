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


// Autor: Osvald
// Lisa suvalisi ore plokke
function addRandomOres() {
    const ores = [
        "../assets/images/bg-dirt.webp",
        "../assets/images/bg-dirt.webp",
        "../assets/images/bg-dirt.webp",
        "../assets/images/bg-dirt.webp",

        "../assets/images/ore-gravel.webp",
        "../assets/images/ore-gravel.webp",
        "../assets/images/ore-gravel.webp",
        "../assets/images/ore-gravel.webp",
        "../assets/images/ore-gravel.webp",

        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",
        "../assets/images/ore-granite.webp",

        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",
        "../assets/images/ore-diorite.webp",

        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",
        "../assets/images/ore-andesite.webp",

        "../assets/images/ore-coal.webp",
        "../assets/images/ore-coal.webp",
        "../assets/images/ore-coal.webp",
        "../assets/images/ore-coal.webp",
        "../assets/images/ore-coal.webp",
        "../assets/images/ore-coal.webp",

        "../assets/images/ore-iron.webp",
        "../assets/images/ore-iron.webp",
        "../assets/images/ore-iron.webp",
        "../assets/images/ore-iron.webp",

        "../assets/images/ore-redstone.webp",
        "../assets/images/ore-redstone.webp",

        "../assets/images/ore-gold.webp",
        "../assets/images/ore-gold.webp",

        "../assets/images/ore-diamond.webp",
        "../assets/images/ore-diamond.webp",

        "../assets/images/ore-chest.webp",

        "../assets/images/ore-emerald.webp"
    ]
    const oreContainer = document.querySelector('.content-wrapper'); // kuhu plokid lisada
    const oreStart = 7.6; // kui kõrgel alustada plokkide lisamist (100px kaupa, 10=1000px)
    const oreDensity = 1/50000; // kui tihedalt plokke lisada (1/100000 = 1 plokk 100x100px iga 100000px kohta ehk iga 10. plokk)
    const screenWidth = window.innerWidth; // lehe laius
    const scrollableHeight = document.body.scrollHeight - oreStart*100; // lehe kõrgus
    const totalArea = screenWidth * scrollableHeight; // lehe pindala
    const oreCount = Math.floor(totalArea * oreDensity); // plokkide arv

    for (let i=0; i<oreCount; i++) {
        const ore = document.createElement('div'); // loo uus plokk
        const oreType = ores[Math.floor(Math.random() * ores.length)]; // vali suvaline plokk
        const oreX = Math.floor(Math.random() * (screenWidth - 100) / 100); // vali suvaline x koordinaat (ruudustiku piires)
        const oreY = Math.floor(Math.random() * (scrollableHeight - 100) / 100) + oreStart; // vali suvaline y koordinaat, veendu, et ei oleks allpool footerit

        ore.style.position = 'absolute'; // ploki stiil
        ore.style.left = `${oreX * 100}px`;
        ore.style.top = `${oreY * 100}px`;
        ore.style.width = '100px';
        ore.style.height = '100px';
        ore.style.backgroundImage = `url(${oreType})`; // ploki pilt
        ore.style.backgroundSize = 'cover'; // ploki pilt täidab kogu ploki

        oreContainer.appendChild(ore); // lisa plokk lehele
    }
}

window.onload = addRandomOres; // lisa plokid kui leht on laetud