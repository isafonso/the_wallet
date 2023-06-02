import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import "../styles/ContractosFinalizados.scss";

const ContractosFinalizados: FC = () => {
  interface IArray {
    id: number;
    initial: string;
    end: string;
  }

  const array: Array<IArray> = [
    {
      id: 2,
      initial: "03/01/2022 as 08:00",
      end: "16/01/2022 as 13:56",
    },
    {
      id: 14,
      initial: "09/02/2022 as 12:06",
      end: "23/02/2022 as 17:27",
    },
    {
      id: 26,
      initial: "16/03/2022 as 18:24",
      end: "30/03/2022 as 23:08",
    },
    {
      id: 4,
      initial: "23/04/2022 as 10:33",
      end: "06/05/2022 as 15:42",
    },
    {
      id: 16,
      initial: "30/05/2022  as 15:17",
      end: "13/06/2022 as 20:33",
    },
  ];
  return (
    <Fragment>
      <NavBar />
      <section className="contractos__finalizados-container">
        <div className="contractos__finalizados-heading">
          <h2 className="contractos__finalizados-titleHeading">
            Contratos finalizados
          </h2>
        </div>
        <div className="contractos__finalizados-boxContract">
          {array.map((item) => (
            <div className="contractos__finalizados-box" key={item.id}>
              <div className="contractos__finalizados-content">
                <h4>
                  ID {item.id} - <span>Finalizado</span>
                </h4>
                <p>
                  Forma de Pagamento: <Link to="/">Bitcoin</Link>
                </p>
              </div>
              <div className="contractos__finalizados-content">
                <h4>0.0030 BTC</h4>
                <em>Valor Arrendado</em>
              </div>
              <div className="contractos__finalizados-content">
                <h4>0.0030 BTC</h4>
                <em>Valor final</em>
              </div>
              <div className="contractos__finalizados-content">
                <h4>{item.initial}</h4>
                <em>Data de Arrendamento</em>
              </div>
              <div className="contractos__finalizados-content">
                <h4>{item.end}</h4>
                <em>Data do encerramento</em>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default ContractosFinalizados;
