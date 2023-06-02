import { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import "../styles/Documentacao.scss";

const Documentacao = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="documentacao__wrapper">
        <div className="documentacao__headerContainer">
          <h2>Documentação</h2>
        </div>
        <div className="documentacao__docsContainer">
          <Link to="#">Termos de uso</Link>
          <Link to="#">Termo de adesão de consultor</Link>
          <Link to="#">Contrato Arrendamento e Custódia de Criptoativo</Link>
          <Link to="#">Política de Gerenciamento de riscos corporativos</Link>
          <Link to="#">Política de Privacidade</Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Documentacao;
