import { FC, Fragment, useState } from "react";
import { NavBar } from "../components";
import "../styles/SolicitarPagamento.scss";

const SolicitarPagamento: FC = () => {
  const [get, setGet] = useState({ value: "", password: "" });

  return (
    <Fragment>
      <NavBar />
      <section className="solicitarPagamento-container">
        <div className="solicitarPagamento-box">
          <h2>
            Bônus Antigo <em>(antiga corretora)</em>
          </h2>
          <span>
            Bônus Disponível em Bitcoin <br />
            <strong>0</strong>{" "}
          </span>
          <span>
            Bônus Bloqueado em Bitcoin <br />
            <strong>0.00000000</strong>{" "}
          </span>
        </div>
        <div className="solicitarPagamento-box">
          <h2>
            Bônus novo <em>(nova corretora)</em>
          </h2>
          <span>
            Bônus Disponível em Bitcoin <br />
            <strong>0</strong>{" "}
          </span>
          <span>
            Bônus Bloqueado em Bitcoin <br />
            <strong>0.00000000</strong>{" "}
          </span>
        </div>
        <div className="solicitarPagamento-box">
          <h2>
            Lucro antigo <em>(antiga corretora)</em>
          </h2>
          <span>
            Lucro antigo em Bitcoin <br />
            <strong>0</strong>{" "}
          </span>
          <span>
            Bônus Bloqueado em Bitcoin <br />
            <strong>0.00000000</strong>{" "}
          </span>
        </div>
        <div className="solicitarPagamento-box">
          <h2>
            Lucro novo <em>(nova corretora)</em>
          </h2>
          <span>
            Lucro novo em Bitcoin <br />
            <strong>0</strong>{" "}
          </span>
          <span>
            Bônus Bloqueado em Bitcoin <br />
            <strong>0.00000000</strong>{" "}
          </span>
        </div>
      </section>
      <section className="solicitarPagamento-warning">
        <h2>AVISO IMPORTANTE:</h2>
        <span>
          Devido ao alto fluxo de pagamentos, estamos implantando uma nova
          tecnologia para dinamizar e agilizar os pagamentos. Neste período de
          transição de sistema e banco de dados, os pagamentos realizar-se-ão na
          forma e prazo dos Termos.
        </span>
      </section>
      <section className="solicitarPagamento-formContainer">
        <form className="solicitarPagamento-form">
          <section className="solicitarPagamento-inputContainer">
            <label htmlFor="">Informe o valor que deseja sacar:</label>
            <span style={{ color: "red", paddingTop: "1rem" }}>
              Valor Mínimo para Saque: <strong>0.001</strong>
            </span>
            <input
              className="solicitarPagamento-input"
              value={get.value}
              onChange={(e) =>
                setGet({ ...get, [e.target.name]: e.target.value })
              }
              type="number"
              placeholder="Valor aqui"
              name="value"
            />
          </section>
          <section className="solicitarPagamento-inputContainer">
            <label htmlFor="">Informe o seu PIN:</label>

            <input
              className="solicitarPagamento-input"
              value={get.password}
              onChange={(e) =>
                setGet({ ...get, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Pin aqui"
              name="password"
            />
            <span style={{ color: "rgb(0, 153, 255)" }}>
              Esqueceu o seu PIN?
            </span>
          </section>
          <input
            className="solicitarPagamento-btnSubmit"
            type="submit"
            value={"Receber"}
          />
        </form>
      </section>
    </Fragment>
  );
};

export default SolicitarPagamento;
