import {
  Fragment,
  useState,
  useEffect,
  FormEvent,
  FC,
  useContext,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/Login.scss";
//import { Oval } from "react-loader-spinner";

const Login: FC = () => {
  const [loginForm, setLoginForm] = useState({ user: "", password: "" });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    dispatch({
      type: "STORE",
      payload: "João Afonso",
    });
    console.log(state.name);
  }, []);

  useEffect(() => {
    console.log(loginForm);
  }, [loginForm]);

  const handleSubmit = async (e: FormEvent) => {
    setLoader(true);
    e.preventDefault();
    const { user, password } = loginForm;
    const data = await fetch("http://localhost:5050", {
      method: "POST",
      headers: {
        "Content-Type": "appliction/json",
      },
      body: JSON.stringify(user, password),
    });
    console.log(data);
    setLoader(false);

    navigate("/backoffice");
  };

  return (
    <Fragment>
      {loader ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>{/* <Oval color="blue" secondaryColor="blue"></Oval> */}</div>
        </div>
      ) : (
        <section className="login__container">
          <h2 className="login__logo">AngoCrypto</h2>
          <span className="login__description">
            Uma empresa idealizada por Anastácio Afonso
          </span>
          <form className="login__form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="user">Usuário</label>
              <input
                className="login__input"
                type="text"
                placeholder="Insira seu nome de usuário"
                name="user"
                id="user"
                required
                value={loginForm.user}
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                className="login__input"
                type="password"
                placeholder="Insira sua senha"
                name="password"
                id="password"
                required
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <input className="login__submit" type="submit" value="Entrar" />
            </div>
          </form>
          <span className="login__link-cadastrar">
            Não tem uma conta?{" "}
            <Link
              to="/cadastro"
              style={{
                textDecoration: "none",
                color: "rgb(0, 102, 255)",
              }}
            >
              Então cadastre-se
            </Link>
          </span>
        </section>
      )}
    </Fragment>
  );
};

export default Login;
