import { FC, Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import { Modal } from "../components";
import { AuthContext } from "../contexts/AuthContext";

const Home: FC = () => {
  const [modal, setModal] = useState(false);
  const { name, pass } = useContext(AuthContext);

  function triggerModal() {
    setModal((prev) => !prev);
  }
  return (
    <Fragment>
      <div>
        <button className="btnModal" onClick={triggerModal}>
          Abrir Modal
        </button>
        <Modal modal={modal} setModal={setModal} triggerModal={triggerModal} />
        Hello from Home page <br />
        <Link to={"/sobre"}>Go to About page</Link>
        <p>
          the name is {name} and pass is {pass}
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
