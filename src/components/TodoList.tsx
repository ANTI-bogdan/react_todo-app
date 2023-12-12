import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  items: Todo[];
};

export const TodoList: React.FC<Props> = ({ items }) => (
  <ul className="todo-list" data-cy="todoList">
    {items.map((todo) => (<TodoItem todo={todo} key={todo.id} />))}
  </ul>
);