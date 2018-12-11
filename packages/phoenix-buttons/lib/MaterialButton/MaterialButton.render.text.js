import * as React from 'react'
import MaterialButton from './MaterialButton'

const handleOnClick = () => {}

export const textDefaultMaterialButton = (
  <MaterialButton
    onClick={handleOnClick}
  >
    Default
  </MaterialButton>
)

export const textPrimaryMaterialButton = (
  <MaterialButton
    color="primary"
    onClick={handleOnClick}
  >
    Primary
  </MaterialButton>
)

export const textSecondaryMaterialButton = (
  <MaterialButton
    color="secondary"
    onClick={handleOnClick}
  >
    Secondary
  </MaterialButton>
)

export const textDisabledMaterialButton = (
  <MaterialButton
    onClick={handleOnClick}
    disabled
  >
    Disabled
  </MaterialButton>
)

export const textLinkMaterialButton = (
  <MaterialButton
    href="https://github.com/code-star/phoenix"
    onClick={handleOnClick}
  >
    Link
  </MaterialButton>
)

export const textUploadMaterialButton = (
  <MaterialButton
    upload
    id="flat-button-file"
    onClick={handleOnClick}
  >
    Upload
  </MaterialButton>
)
