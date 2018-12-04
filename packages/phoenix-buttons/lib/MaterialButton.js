import * as React from 'react'
import Button from '@material-ui/core/Button'
import { string, node, oneOf, func, bool } from 'prop-types'

const MaterialButton = ({ variant, color, disabled, className, children, onClick }) =>
  <Button
    variant={ variant }
    color={color}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>

MaterialButton.defaultProps = {
  variant: 'text',
  color: 'inherit',
  disabled: false,
  className: '',
  children: null,
}

MaterialButton.propTypes = {
  variant: oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab']),
  color: oneOf(['inherit', 'primary', 'secondary', 'default']),
  disabled: bool,
  className: string,
  children: node,
  onClick: func.isRequired,
}

export default MaterialButton
