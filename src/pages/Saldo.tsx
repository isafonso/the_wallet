import { NavBar } from "../components";
import "../styles/Saldo.scss";

const Saldo = () => {
  return (
    <>
      <NavBar />
      <section className="saldo-wrapper">
        <div className="saldo-container">
          <div className="content-container">
            <h3>Saldo Pago:</h3>
            <strong>1029</strong>
          </div>
          <div className="content-container">
            <h3>Saldo Utlizado:</h3>
            <strong>147</strong>
          </div>
          <div className="content-container">
            <h3>Saldo Pago que falta utilizar:</h3>
            <strong>882</strong>
          </div>
        </div>
      </section>
    </>
  );
};

export default Saldo;
