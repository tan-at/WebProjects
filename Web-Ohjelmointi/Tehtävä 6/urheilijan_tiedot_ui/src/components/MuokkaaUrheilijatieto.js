import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";

const MuokkaaUrheilijatieto = () => {
  const [nimi, setNimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState(""); //syntymavuosi
  const [paino, setPaino] = useState(""); //paino
  const [kuvaLinkki, setKuvaLinkki] = useState(""); //kuvaLinkki
  const [urheilulaji, setUrheilulaji] = useState(""); //urheilulaji
  const [saavutukset, setSaavutukset] = useState(""); //saavutukset

  const [list, setList] = useState([]);
  const UrheilijatiedotContext = useContext(urheilijatiedotContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const urheilijatieto = UrheilijatiedotContext.getUrheilijatieto(id).then(
        (res) => {
          //Vanhat urheilijan tiedot
          setNimi(res.nimi);
          setSyntymavuosi(res.syntymavuosi); //Syntymävuosi
          setPaino(res.paino); //paino
          setKuvaLinkki(res.kuvaLinkki); //kuvaLinkki
          setUrheilulaji(res.urheilulaji); //urheilulaji
          setSaavutukset(res.saavutukset); //saavutukset
        }
      );
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    //Uudet urheilijan tiedot
    const paivitettyUrheilijatieto = {
      nimi: nimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      kuvaLinkki: kuvaLinkki,
      urheilulaji: urheilulaji,
      saavutukset: saavutukset,
    };

    UrheilijatiedotContext.setUrheilijatieto(id, paivitettyUrheilijatieto);
    history("/");
  };
  const onChangeNimi = (e) => {
    //nimi
    setNimi(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    //syntymävuosi
    setSyntymavuosi(e.target.value);
  };
  const onChangePaino = (e) => {
    //paino
    setPaino(e.target.value);
  };
  const onChangeKuvaLinkki = (e) => {
    //kuvaLinkki
    setKuvaLinkki(e.target.value);
  };
  const onChangeUrheilulaji = (e) => {
    //urheilulaji
    setUrheilulaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    //saavutukset
    setSaavutukset(e.target.value);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijatietoja</div>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            //nimi
            <label htmlFor="nimi">Nimi</label>
            <input
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={onChangeNimi}
            />
          </div>
          <div className="form-group">
            {" "}
            //syntymävuosi
            <label htmlFor="nimi">Syntymävuosi</label>
            <input
              type="text"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>
          <div className="form-group">
            {" "}
            //paino
            <label htmlFor="nimi">Paino</label>
            <input
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            {" "}
            //kuvaLinkki
            <label htmlFor="nimi">Linkki kuvaan</label>
            <input
              type="text"
              name="kuvaLinkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkki kuvaan..."
              value={kuvaLinkki}
              onChange={onChangeKuvaLinkki}
            />
          </div>
          <div className="form-group">
            {" "}
            //urheilulaji
            <label htmlFor="nimi">Urheilulaji</label>
            <input
              type="text"
              name="urheilulaji"
              className="form-control form-control-lg"
              placeholder="Syötä urheilulaji..."
              value={urheilulaji}
              onChange={onChangeUrheilulaji}
            />
          </div>
          <div className="form-group">
            {" "}
            //saavutukset
            <label htmlFor="nimi">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>

          <input
            type="submit"
            value="Muokkaa urheilijatieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilijatieto;
