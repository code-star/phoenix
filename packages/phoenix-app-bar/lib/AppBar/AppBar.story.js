import { storiesOf } from '@storybook/react'
import { getInfo } from '../../../../.storybook/utility'
import {
  simpleAppBar,
  denseAppBar,
} from './AppBar.render'

const simpleAppBarInfo = getInfo('Simple App Bar')
const denseAppBarInfo = getInfo('Dense App Bar')

storiesOf('AppBar', module)
  .add(simpleAppBarInfo.text, () => simpleAppBar, simpleAppBarInfo.parameters)
  .add(denseAppBarInfo.text, () => denseAppBar, denseAppBarInfo.parameters)
