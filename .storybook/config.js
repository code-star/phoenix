import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { withOptions } from '@storybook/addon-options';
import { version } from '../lerna.json';
import './index.css'

addDecorator(withInfo);
addDecorator(withNotes);
addDecorator(
  withOptions({
    name: `Phoenix v${version}`,
    url: 'https://github.com/code-star/phoenix',
    showAddonPanel: true,
    addonPanelInRight: true
  })
)

const req = require.context('../packages', true, /.story.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
