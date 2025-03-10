import React from 'react';

interface TextBlockProps {
  content: string;
  variant?: 'title' | 'subtitle' | 'body' | 'caption' | 'h1';
  alignment?: 'left' | 'center' | 'right';
}

export const TextBlock: React.FC<TextBlockProps> = ({ content, variant = 'body', alignment = 'left' }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'h1':
        return 'text-4xl font-bold';
      case 'title':
        return 'text-2xl font-bold';
      case 'subtitle':
        return 'text-xl font-semibold';
      case 'caption':
        return 'text-sm text-gray-600';
      default:
        return 'text-base';
    }
  };

  const getAlignmentClass = () => {
    switch (alignment) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  return (
    <div className={`${getVariantClass()} ${getAlignmentClass()} p-4`}>
      {content}
    </div>
  );
};

