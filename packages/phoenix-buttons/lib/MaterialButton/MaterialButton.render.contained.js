import * as React from 'react'
import MaterialButton from './MaterialButton'

const handleOnClick = () => {}

export const containedDefaultMaterialButton = (
  <MaterialButton
    variant="contained"
    onClick={handleOnClick}
  >
    Default
  </MaterialButton>
)

export const containedPrimaryMaterialButton = (
  <MaterialButton
    variant="contained"
    color="primary"
    onClick={handleOnClick}
  >
    Primary
  </MaterialButton>
)

export const containedSecondaryMaterialButton = (
  <MaterialButton
    variant="contained"
    color="secondary"
    onClick={handleOnClick}
  >
    Secondary
  </MaterialButton>
)

export const containedDisabledMaterialButton = (
  <MaterialButton
    variant="contained"
    onClick={handleOnClick}
    disabled
  >
    Disabled
  </MaterialButton>
)

export const containedLinkMaterialButton = (
  <MaterialButton
    variant="contained"
    href="https://github.com/code-star/phoenix"
    onClick={handleOnClick}
  >
    Link
  </MaterialButton>
)

export const containedUploadMaterialButton = (
  <MaterialButton
    variant="contained"
    id="contained-button-file"
    upload
    onClick={handleOnClick}
  >
    Upload
  </MaterialButton>
)
