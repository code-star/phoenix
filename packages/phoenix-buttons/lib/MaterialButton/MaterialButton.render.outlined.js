import * as React from 'react'
import MaterialButton from './MaterialButton'

const handleOnClick = () => {}

export const outlinedDefaultMaterialButton = (
  <MaterialButton
    variant="outlined"
    onClick={handleOnClick}
  >
    Default
  </MaterialButton>
)

export const outlinedPrimaryMaterialButton = (
  <MaterialButton
    variant="outlined"
    color="primary"
    onClick={handleOnClick}
  >
    Primary
  </MaterialButton>
)

export const outlinedSecondaryMaterialButton = (
  <MaterialButton
    variant="outlined"
    color="secondary"
    onClick={handleOnClick}
  >
    Secondary
  </MaterialButton>
)

export const outlinedDisabledMaterialButton = (
  <MaterialButton
    variant="outlined"
    onClick={handleOnClick}
    disabled
  >
    Disabled
  </MaterialButton>
)

export const outlinedLinkMaterialButton = (
  <MaterialButton
    variant="outlined"
    href="https://github.com/code-star/phoenix"
    onClick={handleOnClick}
  >
    Link
  </MaterialButton>
)

export const outlinedUploadMaterialButton = (
  <MaterialButton
    variant="outlined"
    upload
    id="outlined-button-file"
    onClick={handleOnClick}
  >
    Upload
  </MaterialButton>
)
