import { FC, Fragment, useState } from "react";
import {
  Notebook,
  RelogioSmartWatch,
  SmartPhone,
  SmartWatch,
} from "../../public/assets/images";
import { NavBar } from "../components";
import "../styles/PlanoDeCarreira.scss";

interface IItems {
  title: string;
  img: string;
  name: string;
  status: boolean;
  points: number;
  progress: number;
}

const PlanoDeCarreira: FC = () => {
  const items: IItems[] = [
    {
      title: "Start",
      img: Notebook,
      name: "Notebook",
      status: true,
      points: 2500,
      progress: 16,
    },
    {
      title: "Expansor",
      img: RelogioSmartWatch,
      name: "Relógio Smartwatch",
      status: false,
      points: 3000,
      progress: 32,
    },
    {
      title: "Bronze",
      img: SmartPhone,
      name: "Smartphone",
      status: false,
      points: 5000,
      progress: 64,
    },
    {
      title: "Prata",
      img: SmartWatch,
      name: "Smartwatch",
      status: true,
      points: 100,
      progress: 100,
    },
  ];
  return (
    <Fragment>
      <NavBar />
      <section className="plano__de__carreira-wrapper">
        <div className="plano__de__carreira-pointsContainer">
          <strong>1290</strong>
          <p>Pontos</p>
        </div>
        <div className="plano__de__carreira-contentContainer">
          {items.map((item, index) => (
            <div className="plano__de__carreira-itemsContainer" key={index}>
              <h1>{item.title}</h1>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <em>{item.points} pontos</em>
              <span>
                status:
                {item.status ? <span>Completo</span> : <span>Pendente</span>}
              </span>
              {item.progress >= 25 && item.progress < 50 ? (
                <progress
                  style={{
                    color: `${
                      item.progress >= 25 && item.progress < 50
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              ) : item.progress >= 50 && item.progress < 75 ? (
                <progress
                  style={{
                    color: `${
                      item.progress >= 50 && item.progress < 75
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              ) : item.progress >= 75 && item.progress < 100 ? (
                <progress
                  style={{
                    color: `${
                      item.progress >= 75 && item.progress < 100
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              ) : (
                <progress
                  style={{
                    color: `${
                      item.progress >= 75 && item.progress < 100
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              )}
            </div>
          ))}
        </div>
        <div className="plano__de__carreira-contentContainer">
          {items.map((item, index) => (
            <div className="plano__de__carreira-itemsContainer" key={index}>
              <h1>{item.title}</h1>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <em>{item.points} pontos</em>
              <span>
                status:
                {item.status ? <span>Completo</span> : <span>Pendente</span>}
              </span>
              {item.progress >= 25 && item.progress < 50 ? (
                <progress
                  style={{
                    color: `${
                      item.progress >= 25 && item.progress < 50
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              ) : item.progress >= 50 && item.progress < 75 ? (
                <progress
                  style={{
                    color: `${
                      item.progress >= 50 && item.progress < 75
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              ) : item.progress >= 75 && item.progress < 100 ? (
                <progress
                  style={{
                    color: `${
                      item.progress >= 75 && item.progress < 100
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              ) : (
                <progress
                  style={{
                    color: `${
                      item.progress >= 75 && item.progress < 100
                        ? "green"
                        : "red"
                    }`,
                  }}
                  value={item.progress}
                ></progress>
              )}
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default PlanoDeCarreira;
