import React from 'react';

export interface XoMikuSvgIconProps {
  className?: string;
  type?: 'type1' | 'type2';
}

const YELLOW = '#dbc884';
const GOLD = '#bba58e';
const DARK_YELLOW = '#5d5041';

export const XoMikuSvg = ({ className = '', type = 'type1' }: XoMikuSvgIconProps) => {
  const isType1 = type === 'type1';

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg">
      {isType1 ? (
        <>
          <ThreeDimensionalParts />
          <line x1="85" y1="15" x2="15" y2="85" stroke={YELLOW} strokeWidth="25" />
          <line x1="22" y1="22" x2="87" y2="85" stroke={YELLOW} strokeWidth="30" />
        </>
      ) : (
        <>
          <LowerLeftLine />
          <LowerRightLine />
        </>
      )}
    </svg>
  );
};

const ThreeDimensionalParts = () => (
  <>
    <g transform="translate(2,2)">
      <line x1="85" y1="15" x2="15" y2="85" stroke={GOLD} strokeWidth="27" />
    </g>
    <g transform="translate(3,3)">
      <line x1="20" y1="20" x2="87" y2="85" stroke={GOLD} strokeWidth="30" />
    </g>
  </>
);

const LowerRightLine = () => (
  <>
    <line x1="15" y1="15" x2="85" y2="85" stroke={DARK_YELLOW} strokeWidth="30" />
    <line x1="16" y1="16" x2="84" y2="84" stroke={YELLOW} strokeWidth="28" />
  </>
);

const LowerLeftLine = () => (
  <>
    <line x1="85" y1="15" x2="15" y2="85" stroke={DARK_YELLOW} strokeWidth="30" />
    <line x1="84" y1="16" x2="16" y2="84" stroke={YELLOW} strokeWidth="28" />
  </>
);
