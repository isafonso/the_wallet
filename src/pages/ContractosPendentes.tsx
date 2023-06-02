import { FC } from "react";
import "../styles/ContractosPendentes.scss";
import { NavBar } from "../components";
import { Link } from "react-router-dom";

const ContractosPendentes: FC = () => {
  const array = [
    {
      id: Math.random(),
      data: "02/01/2022",
    },
    {
      id: Math.random(),
      data: "09/02/2022",
    },
    {
      id: Math.random(),
      data: "16/03/2022",
    },
    {
      id: Math.random(),
      data: "23/04/2022",
    },
    {
      id: Math.random(),
      data: "30/05/2022",
    },
    {
      id: Math.random(),
      data: "06/06/2022",
    },
    {
      id: Math.random(),
      data: "13/07/2022",
    },
  ];

  return (
    <>
      <NavBar />
      <section className="contractosPendentes__container">
        <div className="contractosPendentes__heading">
          <h2 className="contractosPendentes__titleHeading">
            Contratos pendentes
          </h2>
        </div>
        <div className="contractosPendentes__boxContainer">
          {array.map((item) => (
            <div className="contractosPendentes__box" key={item.id}>
              <div className="contractosPendentes__boxContent">
                <h4>ID {item.id}</h4>
                <p>
                  Acompanhar status do Pagamento:{" "}
                  <Link to="/">Clique aqui</Link>
                </p>{" "}
                <span>Aguardando Pagamento</span>
                <p>
                  Forma de Pagamento: <Link to="/">Bitcoin</Link>
                </p>
              </div>
              <div className="contractosPendentes__boxContent">
                <h4>0.0030 BTC</h4>
                <em>Valor Arrendado</em>
              </div>
              <div className="contractosPendentes__boxContent">
                <h4>{item.data}</h4>
                <em>Data do Arrendamento</em>
              </div>
              <div className="contractosPendentes__boxContent">
                <button className="pay">Pagar</button>
              </div>
              <div className="contractosPendentes__boxContent">
                <button className="update">Actualizar</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContractosPendentes;
