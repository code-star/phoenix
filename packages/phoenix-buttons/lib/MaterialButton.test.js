import * as renderer from 'react-test-renderer'
import {
  containedDefaultMaterialButton,
  containedPrimaryMaterialButton,
  containedSecondaryMaterialButton,
  containedDisabledMaterialButton,
  containedLinkMaterialButton,
  containedUploadMaterialButton,
} from './MaterialButton.render'

describe('<MaterialButton />', () => {
  describe('Snaphot', () => {
    test('must match containedDefaultMaterialButton', () => {
      expect(renderer.create(containedDefaultMaterialButton).toJSON()).toMatchSnapshot()
    })

    test('must match containedPrimaryMaterialButton', () => {
      expect(renderer.create(containedPrimaryMaterialButton).toJSON()).toMatchSnapshot()
    })

    test('must match containedSecondaryMaterialButton', () => {
      expect(renderer.create(containedSecondaryMaterialButton).toJSON()).toMatchSnapshot()
    })

    test('must match containedDisabledMaterialButton', () => {
      expect(renderer.create(containedDisabledMaterialButton).toJSON()).toMatchSnapshot()
    })

    test('must match containedLinkMaterialButton', () => {
      expect(renderer.create(containedLinkMaterialButton).toJSON()).toMatchSnapshot()
    })

    test('must match containedUploadMaterialButton', () => {
      expect(renderer.create(containedUploadMaterialButton).toJSON()).toMatchSnapshot()
    })
  })
})
