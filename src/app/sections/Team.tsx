import React from "react";

export const Team = (props: any) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Conheça a Equipe</h2>
          <p>
            Conheça a equipe dedicada e apaixonada por impulsionar negócios
            sustentáveis.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d: any, i: any) => (
                <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Carregando"}
        </div>
      </div>
    </div>
  );
};
