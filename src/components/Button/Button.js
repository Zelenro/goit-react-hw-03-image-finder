import React from 'react';
import { ButtonWrapper } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <ButtonWrapper type="button" onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};
