// Autor: Osvald
// Peida külgriba kui alla kerida
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    let startUpScroll = 0;
    const scrollHideThreshold = 300;  // piir millest all pool külgriba peita
    const scrollShowThreshold = 300;  // kui palju üles kerida et külgriba näidata
    const sidebar = document.getElementById('sidenav');
 
    window.addEventListener('scroll', function() {
      let currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        // alla kerides
        startUpScroll = currentScroll;
        if (currentScroll > scrollHideThreshold) {
            sidebar.classList.add('inactive');
        }
      } else if (startUpScroll - currentScroll > scrollShowThreshold) {
        // üles kerides
        sidebar.classList.remove('inactive');
      };
      lastScrollTop = currentScroll;
    }, false);
 });


// Autor: Osvald
// Lisa suvalisi ore plokke
function getBasePath() {
    // leia õige aadress (kui leht on alamleht, on piltide asukoht veidi teine)
    const pathName = window.location.pathname;  // lehe aadress
    if (pathName.includes('/subpages/')) {
        return '../assets/images/'; 
    } else {
        return 'assets/images/';
    }
}
function addRandomOres() {
    const basePath = getBasePath();  // leia õige aadress
    const ores = [
        // plokkide list, iga ploki tõenäosus tekkida on vastav selle arvule listis
        `${basePath}bg-dirt.webp`,
        `${basePath}bg-dirt.webp`,
        `${basePath}bg-dirt.webp`,
        `${basePath}bg-dirt.webp`,
        `${basePath}bg-dirt.webp`,

        `${basePath}ore-gravel.webp`,
        `${basePath}ore-gravel.webp`,
        `${basePath}ore-gravel.webp`,
        `${basePath}ore-gravel.webp`,
        `${basePath}ore-gravel.webp`,

        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,
        `${basePath}ore-granite.webp`,

        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,
        `${basePath}ore-diorite.webp`,

        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,
        `${basePath}ore-andersite.webp`,

        `${basePath}ore-coal.webp`,
        `${basePath}ore-coal.webp`,
        `${basePath}ore-coal.webp`,
        `${basePath}ore-coal.webp`,
        `${basePath}ore-coal.webp`,
        `${basePath}ore-coal.webp`,

        `${basePath}ore-iron.webp`,
        `${basePath}ore-iron.webp`,
        `${basePath}ore-iron.webp`,
        `${basePath}ore-iron.webp`,

        `${basePath}ore-redstone.webp`,
        `${basePath}ore-redstone.webp`,

        `${basePath}ore-gold.webp`,
        `${basePath}ore-gold.webp`,

        `${basePath}ore-diamond.webp`,
        `${basePath}ore-diamond.webp`,

        `${basePath}ore-chest.webp`,

        `${basePath}ore-emerald.webp`
    ]
    const oreContainer = document.querySelector('.content-wrapper');  // kuhu plokid lisada (vastav div)
    const oreStart = 7.6;  // kui kõrgel alustada plokkide lisamist (100px kaupa, 10=1000px)
    const oreDensity = 1/50000;  // kui tihedalt plokke lisada (1/100000 = 1 plokk 100x100px iga 100000px kohta ehk iga 10. plokk)
    const screenWidth = window.innerWidth;
    const scrollableHeight = document.body.scrollHeight - oreStart*100;
    const totalArea = screenWidth * scrollableHeight;
    const oreCount = Math.floor(totalArea * oreDensity);

    for (let i=0; i<oreCount; i++) {
        // ploki loomine ja paigutamine
        const ore = document.createElement('div');
        let oreType = ores[Math.floor(Math.random() * ores.length)];
        const oreX = Math.floor(Math.random() * (screenWidth - 100) / 100);  // vali suvaline x koordinaat (ruudustiku piires)
        const oreY = Math.floor(Math.random() * (scrollableHeight - 100) / 100) + oreStart;  // vali suvaline y koordinaat ja veendu, et ei oleks allpool footerit

        // ploki stiil
        ore.style.position = 'absolute';
        ore.style.left = `${oreX * 100}px`;
        ore.style.top = `${oreY * 100}px`;
        ore.style.width = '100px';
        ore.style.height = '100px';
        ore.style.backgroundImage = `url(${oreType})`;
        ore.style.backgroundSize = 'cover';

        // muuda plokk lingiks kui plokk on chest (easter egg)
        if (oreType.includes('chest')) {
            const link = document.createElement('a');
            link.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            link.target = '_blank';
            link.appendChild(ore);
            oreContainer.appendChild(link);  // lisa lingiga plokk lehele
        } else {
            oreContainer.appendChild(ore);  // lisa plokk lehele
        };
    }
}

window.onload = addRandomOres;  // lisa plokid kui leht on laetud