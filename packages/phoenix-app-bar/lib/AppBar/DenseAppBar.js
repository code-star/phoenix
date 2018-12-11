/* eslint react/forbid-prop-types: 0 */
import React from 'react'
import { node, object, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
}

const DenseAppBar = ({ classes, children, onMenuIconClick }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon onClick={onMenuIconClick} />
        </IconButton>
        <Typography variant="h6" color="inherit">
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

DenseAppBar.defaultProps = {
  children: null,
  onMenuIconClick: () => {},
}

DenseAppBar.propTypes = {
  classes: object.isRequired,
  children: node,
  onMenuIconClick: func,
}

export default withStyles(styles)(DenseAppBar)
