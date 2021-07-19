import React, { FunctionComponent } from 'react';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';
import './button.module.scss';

export const Button: FunctionComponent<IButtonProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return <button children="Example button" {...rest} {...root} />;
};

export default Button;
