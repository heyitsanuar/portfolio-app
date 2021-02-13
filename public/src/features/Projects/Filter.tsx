import * as React from "react";

const Filters: React.FC = (props) => {
  return (
    <div className='projects__filter'>
      {["All", "E-Commerce", "Landing Pages", "Others"].map((filter) => (
        <div className='projects__filter-item'>{filter}</div>
      ))}
    </div>
  );
};

export default Filters;
