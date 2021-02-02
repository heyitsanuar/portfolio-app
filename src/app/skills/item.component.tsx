import React from 'react';
import { ISkill } from '@shared/models/skill';
import injectSheet from 'react-jss';

export interface ISkillItemProps {
  skill: ISkill;
  classes?: any;
}

const skillItemStyles = (theme: any) => ({
  skills__rate: {
    backgroundColor: theme.mainPurple,
  },
});

const SkillItem = ({ skill, classes }: ISkillItemProps) => (
  <div className="skills__item">
    <div className="col-xs-2 col-lg-4">
      <p className="skills__name">{skill.title}</p>
    </div>
    <div className="col-xs-10 col-lg-12">
      <div className="skills__pb">
        <div className={`skills__rate ${classes.skills__rate} w-${skill.rate}`}></div>
      </div>
    </div>
  </div>
);

export default injectSheet(skillItemStyles)(SkillItem);
