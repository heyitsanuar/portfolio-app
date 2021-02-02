import React from 'react';
export interface IFactItemProps {
  src: string;
  alt: string;
  isActive?: boolean;
}

const FactItem: React.FC<IFactItemProps> = ({ src, alt, isActive = false }) => {
    return (
        <img
        className={`${isActive ? "facts__thumb--inactive" : "facts__thumb--active"} lazyload`}
        src={src}
        alt={alt}
      />
    )
}

export default FactItem;