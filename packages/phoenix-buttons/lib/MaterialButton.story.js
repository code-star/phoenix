import { storiesOf } from '@storybook/react'

import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton,
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

storiesOf('Buttons/MaterialButtons', module)
  .add(containedDefaultText,() => containedDefaultMaterialButton, containedDefaultParamters)
  .add(containedPrimaryText,() => containedPrimaryMaterialButton, containedPrimaryParamters)
  .add(containedSecondaryText,() => containedSecondaryMaterialButton, containedSecondaryParamters)
