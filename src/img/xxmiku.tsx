import React from 'react'

export interface XxMikuSvgIconProps {
  className?: string
  type?: 'type1' | 'type2'
}

const BLACK = '#3f3f3f'
const RED = '#cc3f73'

export const XxMikuSvg = ({ className = '', type = 'type1' }: XxMikuSvgIconProps) => {
  const isType1 = type === 'type1'

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg">
      {isType1 ? <ThreeDimensionalParts /> : null}
      <line x1="85" y1="15" x2="15" y2="85" stroke={BLACK} strokeWidth={isType1 ? 25 : 30} />
      {isType1 ? (
        <line x1="20" y1="20" x2="87" y2="85" stroke={BLACK} strokeWidth="30" />
      ) : (
        <line x1="15" y1="15" x2="85" y2="85" stroke={RED} strokeWidth="30" />
      )}
    </svg>
  )
}

const ThreeDimensionalParts = () => {
  return (
    <>
      <g transform="translate(2,2)">
        <line x1="85" y1="15" x2="15" y2="85" stroke={RED} strokeWidth="27" />
      </g>
      <g transform="translate(3,3)">
        <line x1="20" y1="20" x2="87" y2="85" stroke={RED} strokeWidth="30" />
      </g>
    </>
  )
}
