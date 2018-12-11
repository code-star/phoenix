import * as renderer from 'react-test-renderer'
import {
  simpleAppBar,
  denseAppBar,
} from './AppBar.render'

describe('<AppBar />', () => {
  describe('Snaphot', () => {
    test('must match simpleAppBar', () => {
      expect(renderer.create(simpleAppBar).toJSON()).toMatchSnapshot()
    })
    test('must match denseAppBar', () => {
      expect(renderer.create(denseAppBar).toJSON()).toMatchSnapshot()
    })
  })
})
