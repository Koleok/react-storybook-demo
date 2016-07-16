import React from 'react';
import Footer from '../Footer';
import { storiesOf, action } from '@kadira/storybook';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../../constants/TodoFilters'

const counts = {
  completedCount: 1,
  activeCount: 4,
};

const actions = {
  onClearCompleted: action('onClearCompleted'),
  onShow: action('onShow'),
};

const footerWith = filter => () => (
  <div className='todoapp'>
    <Footer filter={filter} {...counts} {...actions} />
  </div>
)

storiesOf('Footer', module)
  .add('default view', footerWith(SHOW_ALL))
  .add('show completed', footerWith(SHOW_COMPLETED))
  .add('show active', footerWith(SHOW_ACTIVE));
