import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre Nós</h2>
              <p>{props.data ? props.data.paragraph : "Carregando..."}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Novo contêiner para o conteúdo "Porque Nos Escolher?" abaixo da imagem */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="about-text">
              <h3>Porque Nos Escolher?</h3>
              <div className="row" align="center">
                <div className="col-lg-3 col-sm-4 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "Carregando"}
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-4 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "Carregando"}
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-4 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why3.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "Carregando"}
                  </ul>
                </div>
                <div className="col-lg-3 col-sm-4 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why4.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "Carregando"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
