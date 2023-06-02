import { FC, Fragment, SetStateAction, useState } from "react";
import { NavBar } from "../components";
import "../styles/SaldoEspecial.scss";

const SaldoEspecial: FC = () => {
  const [specialCash, setSpecialCash] = useState("");

  return (
    <Fragment>
      <NavBar />
      <section className="saldoEspecial__container">
        <h3 className="saldoEspecial__description">Saldo especial</h3>
        <hr />
        <form className="saldoEspecial__form">
          <label htmlFor="montante">
            Informe o valor que deseja adicionar ao Saldo: <em>Ex: 0.0005</em>
          </label>
          <input
            className="saldoEspecial__input"
            id="montante"
            type="number"
            placeholder="Coloque o montante"
            value={specialCash}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSpecialCash(e.target.value)
            }
          />
          <input
            className="saldoEspecial__btnSubmit"
            type="submit"
            value="Adicionar"
          />
          <span className="saldoEspecial__alert">Valor mínimo: 0.0005 BTC</span>
          <span className="saldoEspecial__alert">
            Valor menor do que isso não será computado.
          </span>
        </form>
      </section>
    </Fragment>
  );
};

export default SaldoEspecial;
