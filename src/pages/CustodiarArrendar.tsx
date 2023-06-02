import React, { FC, Fragment, useState } from "react";
import "../styles/CustodiarArrendar.scss";

import { NavBar } from "../components";

const RentalMoney: FC = () => {
  const [rental, setRental] = useState("");

  return (
    <Fragment>
      <NavBar />
      <section className="custodiar__arrendar-container">
        <h3 className="custodiar__arrendar-description">Arrendar</h3>
        <hr />
        <form className="custodiar__arrendar-form">
          <label htmlFor="montante">
            Informe o valor que deseja arrendar em Bitcoin: <em>Ex: 0.0005</em>
          </label>
          <input
            className="custodiar__arrendar-form-input"
            id="montante"
            type="number"
            placeholder="Coloque o montante"
            value={rental}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRental(e.target.value)
            }
          ></input>
          <input
            className="custodiar__arrendar-form-submit"
            type="submit"
            value="Enviar"
          ></input>
          <span className="custodiar__arrendar-alert">
            Valor mínimo: 0.0005 BTC
          </span>
          <span className="custodiar__arrendar-alert">
            Valor menor do que isso não será computado.
          </span>
        </form>
      </section>
    </Fragment>
  );
};

export default RentalMoney;
