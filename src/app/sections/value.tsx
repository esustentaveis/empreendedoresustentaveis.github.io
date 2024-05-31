import React from "react";

export const Value = (props: any) => {
  return (
    <div id="value">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <div className="value-text">
              <h2>
                <i>{props.data ? props.data.paragraph : "Carregando..."}</i>
                <span></span>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src="img/value.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
