import * as React from "react";
import { ISkill } from "app/models/SkillModel";

export interface ISkillItemProps {
  skill: ISkill;
}

const SkillItem: React.FC<ISkillItemProps> = (props) => {
  const { skill } = props;

  return (
    <div className='skills__item'>
      <img src={skill.image} alt={skill.title} />
      <p className='skills__name'>{skill.title}</p>
    </div>
  );
};

export default SkillItem;
