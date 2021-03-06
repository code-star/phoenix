/* eslint react/forbid-prop-types: 0 */
import React from 'react'
import { node, object } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
  },
}

const SimpleAppBar = ({ classes, children }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

SimpleAppBar.defaultProps = {
  children: null,
}

SimpleAppBar.propTypes = {
  classes: object.isRequired,
  children: node,
}

export default withStyles(styles)(SimpleAppBar)
