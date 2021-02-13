import * as React from "react";
import ProjectItem from "./Item";
import Filters from "./Filter";
import withStyles from "react-jss";
import { ITheme } from "shared/providers/theme";
import "./projectStyles.scss";

interface IProjectsProps {
  classes: any;
}

const ProjectsContainer: React.FC<IProjectsProps> = (props) => {
  const { classes } = props;

  return (
    <div className={`container ${classes.root}`}>
      <div className='projects'>
        <h1 className='projects__title'>PROJECTS</h1>
        <Filters />
        <div className='projects__list'>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <ProjectItem />
          ))}
        </div>
      </div>
    </div>
  );
};

const projectStyles = (theme: ITheme) => ({
  root: {
    backgroundColor: theme.mainPurple,
  },
});

export default withStyles(projectStyles)(ProjectsContainer);
