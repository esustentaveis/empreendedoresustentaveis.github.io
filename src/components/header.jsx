import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Carregando"}
                  <span></span>
                </h1>
                <div className="btn-custom-container">
                  <h1>
                    {props.data ? props.data.paragraph : "Carregando"}
                  </h1>
                  <a
                    href="#value"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Explore Agora
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
