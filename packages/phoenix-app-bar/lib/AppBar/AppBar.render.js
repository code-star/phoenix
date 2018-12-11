/* eslint import/prefer-default-export: 0 */
import * as React from 'react'
import SimpleAppBar from './SimpleAppBar'
import DenseAppBar from './DenseAppBar'

const handleOnClick = () => {}

export const simpleAppBar = (
  <SimpleAppBar
  >
    Simple App Bar
  </SimpleAppBar>
)

export const denseAppBar = (
  <DenseAppBar
    onMenuIconClick={handleOnClick}
  >
    Dense App Bar
  </DenseAppBar>
)
