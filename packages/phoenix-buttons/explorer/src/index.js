import React from 'react'
import ReactDOM from 'react-dom'

import ContainedMaterialButtons from './ContainedMaterialButtons'

ReactDOM.render(
  <div>
    <div className="d-flex flex-justify-around">
      <div className="col-3">
        <ContainedMaterialButtons />
      </div>

    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
