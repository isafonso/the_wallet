import { NavBar } from "../components";
import "../styles/PremiacoesSolicitadas.scss";

const PremiacoesSolicitadas = () => {
  return (
    <>
      <NavBar />
      <section className="premiacoes-solicitadas-wrapper">
        <div className="heading">
          <h3>Premiações Solicitadas</h3>
        </div>
        <hr />
        <div className="content-container">
          <span>Veja abaixo todos as Premiações Solicitadas no sistema.</span>
          <div className="input-container">
            <input className="input" type="text" placeholder="Mostrar" />
            <input className="input" type="text" placeholder="Buscar" />
          </div>
          <span>Registros:</span>
          <table className="table">
            <thead>
              <tr>
                <th>Prêmio</th>
                <th>Data solicitado</th>
                <th>Data pagamento</th>
                <th>Forma de pagamento</th>
                <th>Código de rastreio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5}>Não foram encontrados registros</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default PremiacoesSolicitadas;
