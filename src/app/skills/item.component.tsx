import React from 'react';

import injectSheet, { Theming } from 'react-jss';

type SkillItemProps = {
  name: string;
  classes?: any;
};

const skillItemStyles = (theme: Theming) => ({});

const UnstyledSkillItem = ({ name, classes }: SkillItemProps) => (
  <div className="skills__item">
    <div className="col-xs-2 col-lg-4">
      <p className="skills__name">{name}</p>
    </div>
    <div className="col-xs-10 col-lg-12">
      <div className="skills__pb">
        <div className="skills__rate w-95 w-0"></div>
      </div>
    </div>
  </div>
);

export const SkillItemComponent = injectSheet(skillItemStyles)(UnstyledSkillItem);
