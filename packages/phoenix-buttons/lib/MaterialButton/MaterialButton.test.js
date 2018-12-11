import * as renderer from 'react-test-renderer'
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

describe('<MaterialButton />', () => {
  describe('Snaphot', () => {
    describe('contained', () => {
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

    describe('text', () => {
      test('must match textDefaultMaterialButton', () => {
        expect(renderer.create(textDefaultMaterialButton).toJSON()).toMatchSnapshot()
      })

      test('must match textPrimaryMaterialButton', () => {
        expect(renderer.create(textPrimaryMaterialButton).toJSON()).toMatchSnapshot()
      })

      test('must match textSecondaryMaterialButton', () => {
        expect(renderer.create(textSecondaryMaterialButton).toJSON()).toMatchSnapshot()
      })

      test('must match textDisabledMaterialButton', () => {
        expect(renderer.create(textDisabledMaterialButton).toJSON()).toMatchSnapshot()
      })

      test('must match textLinkMaterialButton', () => {
        expect(renderer.create(textLinkMaterialButton).toJSON()).toMatchSnapshot()
      })

      test('must match textUploadMaterialButton', () => {
        expect(renderer.create(textUploadMaterialButton).toJSON()).toMatchSnapshot()
      })
    })
  })
})
