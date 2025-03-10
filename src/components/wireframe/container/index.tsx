import React from 'react';

interface WireframeContainerProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const WireframeContainer: React.FC<WireframeContainerProps> = ({
  width = 375,
  height = 667,
  children
}) => {
  return (
    <div 
      className="relative rounded-md shadow-md overflow-auto"
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        border: '2px solid var(--foreground)',
        backgroundColor: 'var(--background)'
      }}
    >
      {children}
    </div>
  );
};

export default WireframeContainer;
