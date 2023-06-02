import { FC } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";
import "../styles/BackOffice.scss";
//import { MdMonetizationOn } from "react-icons/md";
//import { GiNetworkBars } from "react-icons/gi";

const BackOffice: FC = () => {
  return (
    <section className="backoffice__container">
      <NavBar />
      <div className="backoffice__welcome">
        <h1>Seja bem-vindo, você é excelente, você agora é AngoCrypto!</h1>
        <span>
          {" "}
          Já fez seu arrendamento? Caso não tenha feito, não perca tempo para
          fazer parte da nossa empresa.
        </span>{" "}
        <br />
        <Link to="/criptoativo/custodiar-arrendar">
          Custódia e Arrendamento
        </Link>
        <br />
        <h4>
          {" "}
          AngoCrypto, CONSULTORIA E GESTÃO DE CRIPTOATIVOS. Uma empresa
          Idealizada por Anastácio Afonso
        </h4>
      </div>
      <div className="backoffice__coin-container">
        <div className="backoffice__coin">
          {/* <MdMonetizationOn></MdMonetizationOn> */}
          <div>
            <h4>0.09876 BTC</h4>
            <span>Arrendado Agora</span>
          </div>
        </div>
        <div className="backoffice__coin">
          {/* <MdMonetizationOn></MdMonetizationOn> */}
          <div>
            <h4>0.12345 BTC</h4>
            <span>Bônus Disponível</span>
          </div>
        </div>
        <div className="backoffice__coin">
          {/* <MdMonetizationOn></MdMonetizationOn> */}
          <div>
            <h4>0.03039 BTC</h4>
            <span>Total Arrendado</span>
          </div>
        </div>
        <div className="backoffice__coin">
          {/* <MdMonetizationOn></MdMonetizationOn> */}
          <div>
            <h4>0.12093 BTC</h4>
            <span>Bônus Total Ganho</span>
          </div>
        </div>
        <div className="backoffice__coin">
          {/* <GiNetworkBars></GiNetworkBars> */}
          <div>
            <h4>0</h4>
            <span>Rede</span>
          </div>
        </div>
      </div>
      <div className="backoffice__solicitar-pagamento">
        <h1>0.01855200 BTC</h1>
        <h4>Saldo Total</h4>
        <br />
        <Link to="/criptoativo/solicitar-pagamento">Solicitar Saque</Link>
        <br />{" "}
        <span>
          0 BTC Saques Pendentes <br /> <br /> 0 BTC Saques Pagos
        </span>
      </div>
    </section>
  );
};

export default BackOffice;
