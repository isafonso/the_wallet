import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
//import { MdMenu } from "react-icons/md";

const NavBar: FC = () => {
  const slugs = [
    "/custodiar-arrendar",
    "/solicitar-pagamento",
    "/contractos-pendentes",
  ];
  const loc = useLocation();
  console.log(loc.pathname);
  console.log(loc.pathname.includes(slugs[0]));
  return (
    <header className="navbar__header">
      <h1>
        H <br /> H <br />
      </h1>
      <div>
        <button className="navbar__btn">{/* <MdMenu></MdMenu> */}</button>
      </div>
      <ol className="navbar__list">
        <li></li>
        <li>
          <Link
            to="/backoffice"
            style={{
              color:
                loc.pathname == "/backoffice" ? "rgb(0, 102, 143)" : "black",
            }}
          >
            {" "}
            BackOffice
          </Link>
        </li>
        <li>
          <Link
            to=""
            style={{
              color:
                loc.pathname == "/criptoativo/custodiar-arrendar"
                  ? "rgb(0, 102, 143)"
                  : "black",
            }}
          >
            Criptoativo
          </Link>

          <div>
            <li>
              <Link to="/criptoativo/custodiar-arrendar">
                Custodiar e arrendar
              </Link>{" "}
            </li>
            <li>
              <Link to="/criptoativo/solicitar-pagamento">
                Solicitar pagamento
              </Link>{" "}
            </li>
            <li>
              <Link to="/criptoativo/saldo-especial">Saldo especial</Link>{" "}
            </li>
          </div>
        </li>
        <li>
          <Link
            to=""
            style={{
              color:
                loc.pathname == "/contratos" ? "rgb(0, 102, 143)" : "black",
            }}
          >
            Contratos
          </Link>

          <div>
            <li>
              <Link to="/contratos-activos">Activos</Link>
            </li>
            <li>
              <Link to="/contratos-pendentes">Pendentes</Link>
            </li>
            <li>
              <Link to="/contratos-finalizados">Finalizados</Link>
            </li>
          </div>
        </li>
        <li>
          <Link
            to=""
            style={{
              color:
                loc.pathname == "/pagamentos" ? "rgb(0, 102, 143)" : "black",
            }}
          >
            Pagamentos
          </Link>

          <div>
            <li>
              <Link to="/pagamentos-recebidos">Recebidos</Link>
            </li>
            <li>
              <Link to="/pagamentos-pendentes">Pendentes</Link>
            </li>
            <li>
              <Link to="/pagamentos-rejeitados">Rejeitados</Link>
            </li>
          </div>
        </li>
        <li>
          <Link
            to="/consultor"
            style={{
              color:
                loc.pathname == "/consultor" ? "rgb(0, 102, 143)" : "black",
            }}
          >
            Consultor
          </Link>
        </li>
        <li>
          <Link
            to="/plano-de-carreira"
            style={{
              color:
                loc.pathname == "/plano-de-carreira"
                  ? "rgb(0, 102, 143)"
                  : "black",
            }}
          >
            Plano de carreira
          </Link>
        </li>
        <li>
          <Link
            to="/mais"
            style={{
              color: loc.pathname == "/mais" ? "rgb(0, 102, 143)" : "black",
            }}
          >
            Mais
          </Link>

          <div className="more">
            <li>
              <Link to="/mais/saldo">Saldo</Link>
            </li>
            <li>
              <Link to="/mais/premiacoes-solicitadas">
                Premiações solicitadas
              </Link>
            </li>
            <li>
              <Link to="/mais/documentacao">Documentação</Link>
            </li>
            <li>
              <Link to="/mais/activacoes-de-terceiros">
                Activações de terceiros
              </Link>
            </li>
            <li>
              <Link to="">Transferências</Link>
            </li>
            <li>
              <Link to="">Plano de negócio</Link>
            </li>
            <li>
              <Link to="">Perfil</Link>
            </li>
          </div>
        </li>
      </ol>
    </header>
  );
};

export default NavBar;
