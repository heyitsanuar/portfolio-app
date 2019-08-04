import React from 'react';

import { SkillType } from './skill.type';

import injectSheet, { Theming } from 'react-jss';

type SkillItemProps = {
  skill: SkillType;
  classes?: any;
};

const skillItemStyles = (theme: Theming) => ({});

const UnstyledSkillItem = ({ skill, classes }: SkillItemProps) => (
  <div className="skills__item">
    <div className="col-xs-2 col-lg-4">
      <p className="skills__name">{skill.title}</p>
    </div>
    <div className="col-xs-10 col-lg-12">
      <div className="skills__pb">
        <div className={`skills__rate w-${skill.rate}`}></div>
      </div>
    </div>
  </div>
);

export const SkillItemComponent = injectSheet(skillItemStyles)(UnstyledSkillItem);
