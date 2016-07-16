import React from 'react';
import MainSection from '../MainSection';
import { compose, map } from 'ramda';
import { storiesOf, action } from '@kadira/storybook';

const actions = {
  clearCompleted: action('clearCompleted'),
  completeAll: action('completeAll')
};

const getMainSection = todos => () => (
  <div className='todoapp'>
    <MainSection todos={todos} actions={actions} />
  </div>
);

const getTodoPair = (a, b) => ([{
  id: 'one',
  text: 'Item One',
  completed: a,
}, {
  id: 'two',
  text: 'Item Two',
  completed: b,
}]);

const makeStoryFromPair = compose(
  getMainSection,
  getTodoPair,
);

storiesOf('MainSection', module)
  .add('all active', makeStoryFromPair(false, false))
  .add('some completed', makeStoryFromPair(false, true))
  .add('all completed', makeStoryFromPair(true, true));
