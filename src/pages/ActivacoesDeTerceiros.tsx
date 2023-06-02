import { NavBar } from "../components";
import "../styles/ActivacoesDeTerceiros.scss";

const ActivacoesDeTerceiros = () => {
  return (
    <>
      <NavBar />
      <section className="activacoes-de-terceiros-wrapper">
        <div className="heading">
          <h3>Ativações de Terceiros</h3>
        </div>
        <hr></hr>
        <div className="content-container">
          <span>Veja abaixo todas as Ativações de Terceiros que você fez.</span>
          <div className="input-container">
            <input className="input" type="text" placeholder="Mostrar" />
            <input className="input" type="text" placeholder="Buscar" />
          </div>
          <span>Registros:</span>
          <table className="table">
            <thead>
              <tr>
                <th>Data da Ativação</th>
                <th>Login Ativado</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3}>Não foram encontrados registros</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ActivacoesDeTerceiros;
