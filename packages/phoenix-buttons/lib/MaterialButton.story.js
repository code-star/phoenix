import { storiesOf } from '@storybook/react'

import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton,
  containedDisabledMaterialButton,
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

storiesOf('Buttons/MaterialButtons', module)
  .add(containedDefaultText,() => containedDefaultMaterialButton, containedDefaultParamters)
  .add(containedPrimaryText,() => containedPrimaryMaterialButton, containedPrimaryParamters)
  .add(containedSecondaryText,() => containedSecondaryMaterialButton, containedSecondaryParamters)
  .add(containedDisabledText,() => containedDisabledMaterialButton, containedDisabledParamters)
