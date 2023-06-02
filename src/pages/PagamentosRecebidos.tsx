import { Fragment, ReactElement, useContext } from "react";
import { NavBar } from "../components";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/PagamentosRecebidos.scss";

function PagamentosRecebidos(): ReactElement<any, any> {
  return (
    <Fragment>
      <NavBar />
      <section className="pagamentos__recebidos-container">
        <div className="pagamentos__recebidos-heading">
          <h2 className="pagamentos__recebidos-titleHeading">
            Pagamentos recebidos
          </h2>
        </div>
        <div className="pagamentos__recebidos-boxContract">
          {" "}
          Nothing to show
        </div>
      </section>
    </Fragment>
  );
}

export default PagamentosRecebidos;
