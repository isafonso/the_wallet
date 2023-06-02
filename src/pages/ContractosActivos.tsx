import { FC } from "react";
import "../styles/ContractosActivos.scss";
import { NavBar } from "../components";

const ActiveContract: FC = () => {
  return (
    <>
      <NavBar />
      <section className="contractosActivos__container">
        <div className="contractosActivos__heading">
          <h2 className="contractosActivos__titleHeading">Contratos Activos</h2>
        </div>
        <div className="contractosActivos__boxHeading"> Nothing to show</div>
      </section>
    </>
  );
};

export default ActiveContract;
