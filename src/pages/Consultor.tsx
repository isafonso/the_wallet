import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import "../styles/Consultor.scss"

interface ITermsState {
  agre: boolean;
  dontAgre: boolean;
}

const Consultor: FC = () => {
  const [terms, setTerms] = useState<ITermsState>({
    agre: true,
    dontAgre: false,
  });
  return (
    <Fragment>
      <NavBar />
      <section className="consultor__container">
        <div className="consultor__heading">
          <div className="consultor__titleHeading">
            Você deseja tornar-se um Consultor?
          </div>
        </div>
        <div className="consultor__boxContract">
          <div className="consultor__titleHeading">Leia o Termo abaixo:</div>
          <section className="consultor__box">
            <div className=".consultor__content">
              <input
                type="checkbox"
                name="agre"
                id="agre"
                value={terms.agre}
                onClick={() => setTerms({ ...terms, dontAgre: false })}
              />
              <label htmlFor="agre">
                Declaro que li e aceito o{" "}
                <Link to="#">Termo de Adesão de Consultor AngoCrypto</Link>
              </label>
            </div>
            <div className=".consultor__content">
              <input
                type="checkbox"
                name="don´tAgre"
                id="don´tAgre"
                value={terms.dontAgre}
                onClick={() => setTerms({ ...terms, agre: false })}
              />
              <label htmlFor="don´tAgre">
                Não concordo com os Termos de Consultor.
              </label>
            </div>
            <div className=".consultor__content">
              <button type="submit">Concluir</button>
            </div>
          </section>
        </div>
        <div className="consultor__boxContract">
          <div className="consultor__titleHeading">Clientes vinculados:</div>
          <section className="consultor__box">
            <div className=".consultor__content">
              <h4>Usuário</h4>
              <span>Anastácio Afonso</span>
            </div>
            <div className=".consultor__content">
              <h4>Whatsapp</h4>
              <a href="tel:+244 930 553 713">+244 930 553 713</a>
            </div>
            <div className=".consultor__content">
              <h4>Status</h4>
              <a
                style={{
                  padding: "0.5rem",
                  fontSize: "large",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Activo
              </a>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default Consultor;
