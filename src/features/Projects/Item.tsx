import * as React from "react";

const ProjectItem: React.FC = (props) => {
  return (
    <div className='projects__item'>
      <img src='https://vicentferrer.com/wp-content/uploads/ejemplo-landing-1024x531.jpg' alt='' />
      <div className='d-flex align-center justify-center mb-2'>
        <p>Project</p>
      </div>
    </div>
  );
};

export default ProjectItem;
