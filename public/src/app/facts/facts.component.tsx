import React from 'react';
import FactItem from './item.component';
import { factsData } from "./__mocks__/facts.mocks";
import './facts.styles.scss';

const FactsComponent = () => {
  return (
    <section id="facts" className="facts page-section" data-matching-link="#link-contact">
      <div className="container">
        <div className="facts__info col-xs-12 col-sm-3">
          <h1 className="facts__title">FACTS</h1>
          <ul className="facts__list">
            <li className="facts__text">Studied Software Engineering in Mexico.</li>
            <li className="facts__text">Really love learning new languages.</li>
            <li className="facts__text">Geek but sociable.</li>
          </ul>
        </div>
        <div id="facts-items" className="facts__items col-xs-12 col-sm-9">
          <div id="facts-animation" />
          {factsData.map((data, key) => (
            <div key={`FactRow-${key}`} className="facts__image">
              <FactItem 
                src={data.active}
                alt={data.alt}
              />
              <FactItem 
                src={data.unactive}
                alt={data.alt}
                isActive
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsComponent;