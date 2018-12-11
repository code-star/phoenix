import { storiesOf } from '@storybook/react'
import { getInfo } from '../../../../.storybook/utility'

import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton,
  containedDisabledMaterialButton,
  containedLinkMaterialButton,
  containedUploadMaterialButton,
} from './MaterialButton.render'

// contained
const containedDefaultMaterialButtonInfo = getInfo('Contained Default')
const containedPrimaryMaterialButtonInfo = getInfo('Contained Primary')
const containedSecondaryMaterialButtonInfo = getInfo('Contained Secondary')
const containedDisabledMaterialButtonInfo = getInfo('Contained Disabled')
const containedLinkMaterialButtonInfo = getInfo('Contained Link')
const containedUploadMaterialButtonInfo = getInfo('Contained Upload')

storiesOf('MaterialButtons/Contained', module)
  .add(containedDefaultMaterialButtonInfo.text, () => containedDefaultMaterialButton, containedDefaultMaterialButtonInfo.parameters)
  .add(containedPrimaryMaterialButtonInfo.text, () => containedPrimaryMaterialButton, containedPrimaryMaterialButtonInfo.parameters)
  .add(containedSecondaryMaterialButtonInfo.text, () => containedSecondaryMaterialButton, containedSecondaryMaterialButtonInfo.parameters)
  .add(containedDisabledMaterialButtonInfo.text, () => containedDisabledMaterialButton, containedDisabledMaterialButtonInfo.parameters)
  .add(containedLinkMaterialButtonInfo.text, () => containedLinkMaterialButton, containedLinkMaterialButtonInfo.parameters)
  .add(containedUploadMaterialButtonInfo.text, () => containedUploadMaterialButton, containedUploadMaterialButtonInfo.parameters)
