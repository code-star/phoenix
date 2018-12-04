import * as React from 'react';
import Button from '@material-ui/core/Button';
import { string, node, oneOf, func } from 'prop-types';

const MaterialButton = ({ variant, color, className, children, onClick }) =>
  <Button
    variant={ variant }
    color={color}
    className={className}
    onClick={onClick}
  >
    {children}
  </Button>;

MaterialButton.defaultProps = {
  variant: 'text',
  color: 'inherit',
  className: '',
  children: null,
};

MaterialButton.propTypes = {
  variant: oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab']),
  color: oneOf(['inherit', 'primary', 'secondary', 'default']),
  className: string,
  children: node,
  onClick: func.isRequired,
};

export default MaterialButton;
