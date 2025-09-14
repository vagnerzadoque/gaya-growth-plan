import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
  themeColor?: boolean;
  themeVariant?: string;
  theme?: string;
}

export type IconComponent = React.FC<IconProps>;
