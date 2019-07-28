import React from 'react';

import { SkillItemComponent } from './item.component';

import calgaryImage from '@img/skills-background.png';
import './skills.styles.css';

export const SkillListComponent = () => {
  const items: any = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Angular' },
    { name: 'React' },
  ];
  const tools: any = ['Express.js', 'Git', 'SQL', 'NO-SQL', 'SASS'];

  const renderItemList = (): any => {
    return items.map((item: any, index: string): any => {
      return <SkillItemComponent key={index} {...item} />;
    });
  };

  const renderTools = (): any => {
    return tools.map((tool: any, index: string): any => {
      return (
        <i key={index} className="btn btn__link btn--no-link mb-1">
          {tool}
        </i>
      );
    });
  };

  return (
    <section id="skills" className="skills page-section" data-matching-link="#link-skills">
      <div className="container">
        <div className="skills__statistics col-xs-12 col-sm-6 col-lg-6">
          <h1 className="skills__title">SKILLS</h1>
          {renderItemList()}
          <div className="skills__item skills__item--others">
            <div className="col-xs-2 col-sm-4">
              <p className="skills__name">Other Technologies</p>
            </div>
            <div className="skills__more col-sm-10">{renderTools()}</div>
          </div>
        </div>
        <img className="skills__profile lazyload" src={calgaryImage} alt="Anuar Jiménez" />
      </div>
    </section>
  );
};
