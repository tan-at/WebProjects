"use strict";

/**En saanut ohjelmaa toimimaan loppujen lopuksi järkevästi. Kenties vikana ovat get- ja set-metodit, jotka tein javassa
 * oppimallani tavalla. Netistä löytämäni sivut eivät auttaneet asian kanssa.
 */


class Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;
    }
    get etunimet() {
        return this.etunimet;
    }
    get sukunimi() {
        return this.sukunimi;
    }
    get kutsumanimi() {
        return this.kutsumanimi;
    }
    get syntymavuosi() {
        return this.syntymavuosi;
    }
    set etunimet(etunimet) {
        this.etunimet = etunimet;
    }
    set sukunimi(sukunimi) {
        this.sukunimi = sukunimi;
    }
    set kutsumanimi(kutsumanimi) {
        this.kutsumanimi = kutsumanimi;
    }
    set syntymavuosi(syntymavuosi) {
        this.syntymavuosi = syntymavuosi;
    }
}

class Urheilija extends Henkilo {
    constructor(etunimet, sukunimi, syntymavuosi, linkki_kuvaan, omapaino, laji, saavutukset) {
        super(etunimet, sukunimi, syntymavuosi);
        this.linkki_kuvaan = linkki_kuvaan;
        this.omapaino = omapaino;
        this.laji = laji;
        this.saavutukset = saavutukset;
    }
    get linkki_kuvaan() {
        return this.linkki_kuvaan;
    }
    get omapaino() {
        return this.omapaino;
    }
    get laji() {
        return this.laji;
    }
    get saavutukset() {
        return this.saavutukset;
    }
    set linkki_kuvaan(linkki_kuvaan) {
        this.linkki_kuvaan = linkki_kuvaan;
    }
    set omapaino(omapaino) {
        this.omapaino = omapaino;
    }
    set laji(laji) {
        this.laji = laji;
    }
    set saavutukset(saavutukset) {
        this.saavutukset = saavutukset;
    }
}

let Urheilija1 = new Urheilija('Hillevi', "Höttönen", 1979, "placeholder" , 68, "hiihto", "SM-Hopea 1992");
Urheilija1.setlinkki_kuvaan("https://c7.alamy.com/comp/D2F0MT/skier-elena-soboleva-russia-won-the-junior-sprint-classic-technique-D2F0MT.jpg");
let Urheilija2 = new Urheilija("Sergey", "Yemelyanovich", 1982, "https://media.istockphoto.com/photos/wrestling-picture-id136722707?s=612x612" , 68, "Murtomaapaini", "Northern Grand Slam Jam Champion 2000, 2001, 2004");

console.log(Urheilija1);