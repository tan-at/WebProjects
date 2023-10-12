import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";

export default function LisaaUrheilijatieto() {
  let history = useNavigate();
  const [nimi, setNimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState(""); //syntymavuosi
  const [paino, setPaino] = useState(""); //paino
  const [kuvaLinkki, setKuvaLinkki] = useState(""); //kuvaLinkki
  const [urheilulaji, setUrheilulaji] = useState(""); //urheilulaji
  const [saavutukset, setSaavutukset] = useState(""); //saavutukset
  //const [virheet, setVirheet] = useState({});
  const UrheilijatiedotContext = useContext(urheilijatiedotContext); //hooks

  const handleSubmit = async (e) => {
    const uusiUrheilijatieto = {
      nimi: nimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      kuvaLinkki: kuvaLinkki,
      urheilulaji: urheilulaji,
      saavutukset: saavutukset,
    };
    console.log("Tarkistetaan uusiUrheilijatieto -objekti:");
    console.log(uusiUrheilijatieto);

    UrheilijatiedotContext.setUrheilijatiedot(uusiUrheilijatieto);
    history("/");
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilijatieto</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              id="nimitieto"
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={(event) => setNimi(event.target.value)}
              //error={virheet.nimi}
            />
            <div className="invalid-feedback">Täytä nimi</div>
          </div>

          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              id="syntymavuositieto"
              type="text"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
              //error={virheet.puhelin}
            />
            <div className="invalid-feedback">Täytä syntymävuosi</div>
          </div>

          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              id="painotieto"
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
              //error={virheet.puhelin}
            />
            <div className="invalid-feedback">Täytä paino</div>
          </div>

          <div className="form-group">
            <label htmlFor="kuvaLinkki">KuvaLinkki</label>
            <input
              id="kuvaLinkkitieto"
              type="text"
              name="kuvaLinkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkki kuvaan..."
              value={kuvaLinkki}
              onChange={(event) => setKuvaLinkki(event.target.value)}
              //error={virheet.puhelin}
            />
            <div className="invalid-feedback">Täytä kuvalinkki</div>
          </div>

          <div className="form-group">
            <label htmlFor="urheilulaji">Urheilulaji</label>
            <input
              id="urheilulajitieto"
              type="text"
              name="urheilulaji"
              className="form-control form-control-lg"
              placeholder="Syötä urheilulaji..."
              value={urheilulaji}
              onChange={(event) => setUrheilulaji(event.target.value)}
              //error={virheet.puhelin}
            />
            <div className="invalid-feedback">Täytä urheilulaji</div>
          </div>

          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label> //Saavutukset
            <input
              id="saavutuksettieto"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
              //error={virheet.puhelin}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>

          <input
            type="submit"
            value="Lisää urheilijatieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}
