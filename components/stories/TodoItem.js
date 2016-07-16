import React from 'react';
import TodoItem from '../TodoItem';
import { compose } from 'ramda';
import { storiesOf, action } from '@kadira/storybook';

const getItem = todo => () => (
  <div className='todoapp'>
    <div className='todo-list'>
      <TodoItem
        todo={todo}
        editTodo={action('editTodo')}
        deleteTodo={action('deleteTodo')}
        completeTodo={action('completeTodo')}/>
    </div>
  </div>
);

const getTodo = completed => ({
  id: 'the-id',
  text: 'Hello Todo',
  completed,
});

const createItemWhereCompletedIs = compose(getItem, getTodo);

storiesOf('TodoItem', module)
  .add('not completed', createItemWhereCompletedIs(false))
  .add('completed', createItemWhereCompletedIs(true));
