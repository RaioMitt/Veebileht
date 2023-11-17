# Minecrafti plaatide arvustus
Tere tulemast meie Minecrafti muusikaplaatide arvustuse lehele!
See leht on tehtud 2023. aasta sügisel Tartu Ülikooli kursuse Sissejuhatus erialasse raames.
Tiimi liikmed on Raio, Kaspar ja Osvald.
Projekti alguses ei osanud keegi kirjutada HTML ega CSS-i, JavaScripti mõistmisest rääkimata.

[Veebilehe link](https://raiomitt.github.io/Veebileht/)

# Funktsioonid
Siin on välja toodud mõned lahedad lehe funktsioonid, millele tasuks tähelepanu pöörata:
- kui hoida hiirt muusikaplaadi kohal arvustuste lehel, hakkab see keerlema ja mängib vastavat lugu (enne peab lehel olema vajutanud, et see oles aktiivne)
- küljeriba puu lehed liiguvad, igaüks veidi erineval ajal
- külgriba kaob, kui alla kerida ja tuleb tagasi, kui veidi üles kerida, ka päris lehe lõpus olles
- taustal on Minecrafti maapinna struktuur, mis on genereeritud, mitte lihtsalt üks suur pilt
  - ore plokkide genereerimine on juhuslik ja nende asetus muutub lehe värskendamisel või teisele vahelehele minnes. Igal plokil on oma muudetav tõenäosus ilmumiseks. (Huvitav, mis seal chestis on?)
- jaluses on lahe animeeritud tekst :D
- peamise sisuploki taustal on Minecrafti raamatu tekstuur

# TODO
Asjad mis vajavad veel tegemist
## leht: Arvustused
## leht: Ajalugu
- kirjutada valmis sisu tekst (**Kaspar**)
- leida illustreerivaid pilte (**Kaspar**)
- struktureerida ja kujundada lehe sisu selle sisule vastavaks (kõik mis jääb `.main-content`-i sisse) (**Raio**)
  - pildid embeddida, tekst õiges kohas, lõikudel sobivad vahed jne
## leht: Kuidas saada
- kirjutada valmis sisu tekst (**Kaspar**)
- luua illustreerivad ja seletavad videod, pildid (**Kaspar**)
- struktureerida ja kujundada lehe sisu selle sisule vastavaks (kõik mis jääb `.main-content`-i sisse) (**Raio**)
  - videod ja pildid embeddida, tekst õiges kohas, lõikudel sobivad vahed jne
## leht: Audio klipid
- leida veel huvitavaid muusikaplaate mod-idest jms koos piltidega (png, croppitud nii et läbipaistvat osa ei ole kuskil ääres) (**Kaspar**)
- kirjutada iga plaadi kohta veel midagi toredat mis võiks sobida, eriti uute plaatide kohta (**Kaspar**)
- struktureerida ja kujundada lehe sisu selle sisule vastavaks (kõik mis jääb `.main-content`-i sisse) (**Raio**)
  - igal plaadil oma plokk (div) oma elementidega (pilt, tekst, mp3 mängija kust saab tervet lugu kuulata)
  - plokid näiteks kahes tulbas ehk ühes reas kahe plaadi info (üks plokk ikka mingi 400px kõrge) et teistest lehtedest eristuda
## Muu
- failide QC teha (**Kaspar**)
  - koodi failid kõik validaatoriga üle käia
  - kõik osad korralikult eesti keeles kommenteerida (kuigi see juba enam vähem hästi)
  - kasutamata failid `assets` jms alt ära kustutada
  - wiki-s kõigile failidele viited juurde (enamus kõik Microsoft Studios, lihtsalt tuleb viiteid vormistada, aga mis enda tehtud või netist võetud peab viide juures olema)
- taustale muru peale lisada notsu vms ja taevasse mõni pilv, see ala seal praegu väga kurb ja tühi (**raio**)
- külgriba nuppe vajutades võiks mängida minecrafti click heli (fail olemas juba `assets/audio/click.mp3`) (**raio**)
