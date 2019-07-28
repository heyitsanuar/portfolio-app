import React from 'react';

export type ProjectTechnologyProps = {
  title: string;
  url: string;
};

export const ProjectTechnologyComponent = ({ title, url }: ProjectTechnologyProps) => (
  <img className="project__technology-icon lazyload" src={url} alt={title} />
);
