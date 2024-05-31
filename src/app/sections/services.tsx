import React from "react";

export const Services = (props: any) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>
            Descubra como o Empreendedores Sustentáveis está revolucionando o
            suporte a empreendedores por meio de serviços abrangentes que
            abordam as principais necessidades de negócios sustentáveis.
          </p>
        </div>
        <div className=" grid grid-cols-3 grid-rows-2">
          {props.data
            ? props.data.map((d: any, i: any) => (
                <div key={`${d.name}-${i}`}>
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Carregando"}
        </div>
      </div>
    </div>
  );
};
