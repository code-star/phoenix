import { storiesOf } from '@storybook/react'
import { getInfo } from '../../../../.storybook/utility'
import {
  // contained
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton,
  containedDisabledMaterialButton,
  containedLinkMaterialButton,
  containedUploadMaterialButton,
  // text
  textDefaultMaterialButton,
  textPrimaryMaterialButton,
  textSecondaryMaterialButton,
  textDisabledMaterialButton,
  textLinkMaterialButton,
  textUploadMaterialButton,
} from './MaterialButton.render'

// contained
const containedDefaultMaterialButtonInfo = getInfo('Contained Default')
const containedPrimaryMaterialButtonInfo = getInfo('Contained Primary')
const containedSecondaryMaterialButtonInfo = getInfo('Contained Secondary')
const containedDisabledMaterialButtonInfo = getInfo('Contained Disabled')
const containedLinkMaterialButtonInfo = getInfo('Contained Link')
const containedUploadMaterialButtonInfo = getInfo('Contained Upload')

// text
const textDefaultMaterialButtonInfo = getInfo('Text Default')
const textPrimaryMaterialButtonInfo = getInfo('Text Primary')
const textSecondaryMaterialButtonInfo = getInfo('Text Secondary')
const textDisabledMaterialButtonInfo = getInfo('Text Disabled')
const textLinkMaterialButtonInfo = getInfo('Text Link')
const textUploadMaterialButtonInfo = getInfo('Text Upload')

storiesOf('MaterialButtons/Contained', module)
  .add(containedDefaultMaterialButtonInfo.text, () => containedDefaultMaterialButton, containedDefaultMaterialButtonInfo.parameters)
  .add(containedPrimaryMaterialButtonInfo.text, () => containedPrimaryMaterialButton, containedPrimaryMaterialButtonInfo.parameters)
  .add(containedSecondaryMaterialButtonInfo.text, () => containedSecondaryMaterialButton, containedSecondaryMaterialButtonInfo.parameters)
  .add(containedDisabledMaterialButtonInfo.text, () => containedDisabledMaterialButton, containedDisabledMaterialButtonInfo.parameters)
  .add(containedLinkMaterialButtonInfo.text, () => containedLinkMaterialButton, containedLinkMaterialButtonInfo.parameters)
  .add(containedUploadMaterialButtonInfo.text, () => containedUploadMaterialButton, containedUploadMaterialButtonInfo.parameters)

storiesOf('MaterialButtons/Text', module)
  .add(textDefaultMaterialButtonInfo.text, () => textDefaultMaterialButton, textDefaultMaterialButtonInfo.parameters)
  .add(textPrimaryMaterialButtonInfo.text, () => textPrimaryMaterialButton, textPrimaryMaterialButtonInfo.parameters)
  .add(textSecondaryMaterialButtonInfo.text, () => textSecondaryMaterialButton, textSecondaryMaterialButtonInfo.parameters)
  .add(textDisabledMaterialButtonInfo.text, () => textDisabledMaterialButton, textDisabledMaterialButtonInfo.parameters)
  .add(textLinkMaterialButtonInfo.text, () => textLinkMaterialButton, textLinkMaterialButtonInfo.parameters)
  .add(textUploadMaterialButtonInfo.text, () => textUploadMaterialButton, textUploadMaterialButtonInfo.parameters)
