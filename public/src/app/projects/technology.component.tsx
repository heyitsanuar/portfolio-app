import React from 'react';
export interface IProjectTechnologyProps {
  title: string;
  url: string;
}

const ProjectTechnologyComponent: React.FC<IProjectTechnologyProps> = ({ title, url }) => (
  <img className="project__technology-icon lazyload" src={url} alt={title} />
);

export default ProjectTechnologyComponent;