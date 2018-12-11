/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/label-has-for: 0 */
/* eslint react/forbid-prop-types: 0 */

import * as React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { string, node, oneOf, func, bool, object } from 'prop-types'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

const MaterialButton = ({ variant, color, disabled, href, upload, id, classes, children, onClick }) => {
  if (!upload) {
    return (
      <Button
        variant={variant}
        color={color}
        disabled={disabled}
        href={href}
        className={classes.button}
        onClick={onClick}
      >
        {children}
      </Button>
    )
  }

  return (
    <React.Fragment>
      <input
        accept="image/*"
        className={classes.input}
        id={id}
        multiple
        type="file"
      />
      <label htmlFor={id}>
        <Button variant={variant} component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </React.Fragment>
  )
}

MaterialButton.defaultProps = {
  variant: 'text',
  color: 'inherit',
  disabled: false,
  href: '',
  upload: false,
  id: '',
  children: null,
}

MaterialButton.propTypes = {
  variant: oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab']),
  color: oneOf(['inherit', 'primary', 'secondary', 'default']),
  disabled: bool,
  href: string,
  upload: bool,
  id: string,
  classes: object.isRequired,
  children: node,
  onClick: func.isRequired,
}

export default withStyles(styles)(MaterialButton)
