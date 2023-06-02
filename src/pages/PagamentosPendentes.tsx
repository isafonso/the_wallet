import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import "../styles/PagamentosPendentes.scss";

const PagamentosPendentes: FC = () => {
  return (
    <Fragment>
      <NavBar />
      <section className="pagamentos__pendentes-container">
        <div className="pagamentos__pendentes-heading">
          <h2 className="pagamentos__pendentes-titleHeading">
            Pagamentos pendentes
          </h2>
        </div>
        <div className="pagamentos__pendentes-boxContract">
          <section className="pagamentos__pendentes-warning">
            <h2>AVISO IMPORTANTE:</h2>
            <span>
              Devido ao alto fluxo de pagamentos, estamos implantando uma nova
              tecnologia para dinamizar e agilizar os pagamentos. Neste período
              de transição de sistema e banco de dados, os pagamentos
              realizar-se-ão na forma e prazo dos Termos.
            </span>
          </section>
          <section className="pagamentos__pendentes-box">
            <div className="pagamentos__pendentes-content">
              <h4>ID #258161 </h4>
              <span>Aguardando Recebimento do Saque</span>
              <p>Carteira: bc1q4s2akzeeztntcwzrgngf9g3296r23n85xux5rc</p>
              <p>
                Tipo: <Link to="/#">Lucro</Link>
              </p>
            </div>
            <div className="pagamentos__pendentes-content">
              <h4>0.01429900</h4>
              <em>Valor</em>
            </div>
            <div className="pagamentos__pendentes-content">
              <h4>10/01/2022 05:50:20</h4>
              <em>Data do Solicitação</em>
            </div>
            <div className="pagamentos__pendentes-content">
              <button className="cancel">Cancelar</button>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default PagamentosPendentes;
