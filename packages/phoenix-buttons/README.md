# Phoenix Buttons

[![CircleCI](https://circleci.com/gh/code-star/phoenix.svg?style=svg)](https://circleci.com/gh/code-star/phoenix)
[![TravisCI](https://travis-ci.org/code-star/phoenix.svg?style=svg)](https://travis-ci.org/code-star/phoenix)
[![version](https://img.shields.io/npm/v/phoenix-buttons.svg?style=flat-square)](http://npm.im/phoenix-buttons)
[![downloads](https://img.shields.io/npm/dm/phoenix-buttons.svg?style=flat-square)](http://npm-stat.com/charts.html?package=phoenix-buttons&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/phoenix-buttons.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another.

This repository is a module of the full [phoenix][phoenix] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `phoenix-buttons` with this command.

```
$ npm install --save phoenix-buttons
```

## Explorer

Check out how to use phoenix Buttons with React 16, Webpack 4 and Babel 7 [here](https://github.com/code-star/phoenix/tree/master/packages/phoenix-buttons/explorer)

## NPM

Get the latest phoenix-buttons [here](https://www.npmjs.com/package/phoenix-buttons)

## Usage

You can import it like this.

```javascript
import { MaterialButton } from 'phoenix-buttons'
```

## Documentation

Buttons allow users to take actions, and make choices, with a single tap.

### Phoenix MaterialButtons

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.

#### Contained Default MaterialButton
```html
  <MaterialButton
    variant="contained"
    onClick={handleOnClick}
  >
    Default
  </MaterialButton>
```

#### Contained Primary MaterialButton
```html
  <MaterialButton
    variant="contained"
    color="primary"
    onClick={handleOnClick}
  >
    Primary
  </MaterialButton>
```

#### Contained Secondary MaterialButton
```html
  <MaterialButton
    variant="contained"
    color="secondary"
    onClick={handleOnClick}
  >
    Secondary
  </MaterialButton>
```

#### Contained Disabled MaterialButton
```html
  <MaterialButton
    variant="contained"
    onClick={handleOnClick}
    disabled
  >
    Disabled
  </MaterialButton>
```

#### Contained Link MaterialButton
```html
  <MaterialButton
    variant="contained"
    href="https://github.com/code-star/phoenix"
    onClick={handleOnClick}
  >
    Link
  </MaterialButton>
```

#### Contained Upload MaterialButton
```html
  <MaterialButton
    variant="contained"
    upload
    onClick={handleOnClick}
  >
    Upload
  </MaterialButton>
```

## License

[MIT](./LICENSE) &copy; [CODE.STΛR](https://github.com/code-star)

[phoenix]: https://github.com/code-star/phoenix
[docs]: https://github.com/code-star/phoenix/tree/master/packages/phoenix-buttons
[npm]: https://www.npmjs.com/package/phoenix-buttons
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react
