import * as React from "react";
import Item from "./Item";
import injectSheet from "react-jss";
import { ITheme } from "shared/providers/theme";
import { ISkill } from "app/models/SkillModel";
import "./skillStyles.scss";

interface ISkillsProps {
  skills: ISkill[];
  classes: any;
}

const Skills: React.FC<ISkillsProps> = (props) => {
  const { skills, classes } = props;

  const renderItemList = (): React.ReactNode =>
    skills.map((skill) => <Item key={skill.id} skill={skill} />);

  return (
    <section
      id='skills'
      className={`skills ${classes.skills} page-section`}
      data-matching-link='#link-skills'
    >
      <div className='container'>
        <div className='skills__statistics col-xs-12 col-sm-6 col-lg-6'>
          <h1 className='skills__title'>SKILLS</h1>
          <div className='d-flex flex-wrap'>{renderItemList()}</div>
        </div>
        <img
          className='skills__profile lazyload'
          src='https://i.ibb.co/Nj6L9q8/skills-background.png'
          alt='Anuar Jiménez'
        />
      </div>
    </section>
  );
};

const skillListStyles = (theme: ITheme) => ({
  skills: {
    backgroundColor: theme.mainRed,
  },
});

export default injectSheet(skillListStyles)(Skills);
