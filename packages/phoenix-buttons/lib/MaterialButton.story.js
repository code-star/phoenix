import { storiesOf } from '@storybook/react'

import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton,
  containedDisabledMaterialButton,
  containedLinkMaterialButton,
  containedUploadMaterialButton,
} from './MaterialButton.render'

const containedDefaultText = 'Contained Default'
const containedDefaultParamters = {
  info: containedDefaultText,
  notes: `Must render ${containedDefaultText}`,
}

const containedPrimaryText = 'Contained Primary'
const containedPrimaryParamters = {
  info: containedPrimaryText,
  notes: `Must render ${containedPrimaryText}`,
}

const containedSecondaryText = 'Contained Secondary'
const containedSecondaryParamters = {
  info: containedSecondaryText,
  notes: `Must render ${containedSecondaryText}`,
}

const containedDisabledText = 'Contained Disabled'
const containedDisabledParamters = {
  info: containedDisabledText,
  notes: `Must render ${containedDisabledText}`,
}

const containedLinkText = 'Contained Link'
const containedLinkParamters = {
  info: containedLinkText,
  notes: `Must render ${containedLinkText}`,
}

const containedUploadText = 'Contained Upload'
const containedUploadParamters = {
  info: containedUploadText,
  notes: `Must render ${containedUploadText}`,
}

storiesOf('Buttons/MaterialButtons', module)
  .add(containedDefaultText,() => containedDefaultMaterialButton, containedDefaultParamters)
  .add(containedPrimaryText,() => containedPrimaryMaterialButton, containedPrimaryParamters)
  .add(containedSecondaryText,() => containedSecondaryMaterialButton, containedSecondaryParamters)
  .add(containedDisabledText,() => containedDisabledMaterialButton, containedDisabledParamters)
  .add(containedLinkText,() => containedLinkMaterialButton, containedLinkParamters)
  .add(containedUploadText,() => containedUploadMaterialButton, containedUploadParamters)
