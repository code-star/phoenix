/* eslint no-console : 0 */

import React from 'react'
import ReactDOM from 'react-dom'
import MaterialButton from '../../build/phoenix-buttons'
// import { MaterialButton } from 'phoenix-buttons';

import 'primer-utilities/index.scss'

function handleOnClick() {
  console.log('~handling onClick~')
}

ReactDOM.render(
  <div>
    <h1 className="pl-1"><span role="img" aria-label="image">🎨</span> Andromeda MaterialButtons</h1>

    <h2 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Default MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        onClick={handleOnClick}
      >
        Default
      </MaterialButton>
    </div>

    <h2 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Primary MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Primary
      </MaterialButton>
    </div>

    <h2 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Secondary MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        color="secondary"
        onClick={handleOnClick}
      >
        Secondary
      </MaterialButton>
    </div>

    <h2 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Disabled MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        onClick={handleOnClick}
        disabled
      >
        Disabled
      </MaterialButton>
    </div>

    <h2 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Link MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        href="https://github.com/code-star/phoenix"
        onClick={handleOnClick}
      >
        Link
      </MaterialButton>
    </div>

    <h2 className="pl-2"><span role="img" aria-label="image">🗿</span> Contained Upload MaterialButton</h2>
    <div className="pl-6">
      <MaterialButton
        variant="contained"
        upload
        onClick={handleOnClick}
      >
        Upload
      </MaterialButton>
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
