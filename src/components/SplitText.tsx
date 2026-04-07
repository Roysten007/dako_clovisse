import React from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: any;
  to?: any;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  tag?: keyof JSX.IntrinsicElements;
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
  className = '',
  textAlign = 'center',
  tag = 'p',
}: SplitTextProps) => {

  const style: React.CSSProperties = {
    textAlign,
    display: 'inline-block',
  };
  
  const Tag = tag || 'p';

  return (
    // @ts-ignore
    <Tag style={style} className={className}>
      {text}
    </Tag>
  );
};

export default SplitText;
