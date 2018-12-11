/* eslint no-console : 0 */

import React from 'react'
import MaterialButton from '../../build/phoenix-buttons'
// import MaterialButton from 'phoenix-buttons'

import 'primer-utilities/index.scss'

function handleOnClick() {
  console.log('~handling onClick~')
}

const ContainedMaterialButtons = () => (
  <div>
    <h2 className="p-2"><span role="img" aria-label="art"> 🎨 </span>Contained Material Buttons</h2>

    <h3 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Default MaterialButton</h3>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        onClick={handleOnClick}
      >
        Default
      </MaterialButton>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Primary MaterialButton</h3>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Primary
      </MaterialButton>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Secondary MaterialButton</h3>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        color="secondary"
        onClick={handleOnClick}
      >
        Secondary
      </MaterialButton>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Disabled MaterialButton</h3>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        onClick={handleOnClick}
        disabled
      >
        Disabled
      </MaterialButton>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Link MaterialButton</h3>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        href="https://github.com/code-star/phoenix"
        onClick={handleOnClick}
      >
        Link
      </MaterialButton>
    </div>

    <h3 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Upload MaterialButton</h3>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        upload
        onClick={handleOnClick}
      >
        Upload
      </MaterialButton>
    </div>
  </div>
)

export default ContainedMaterialButtons
