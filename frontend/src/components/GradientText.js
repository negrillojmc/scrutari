import React from 'react';

const GradientText = ({ children }) => {
  const gradientBorderClass = `
  `;
  const gradientTextClass = `border-red-500 
  `;
  

  return (
    <div className={`${gradientBorderClass}`}>
      <div className={`${gradientTextClass}`}>
        {children}
      </div>
    </div>
  );
};

export default GradientText;