import { section, header, h1, h2, ul, li, div, input, span, button, a, footer } from '@cycle/dom';

function todoBody(todo) {
  if(todo.editing) {
    return input('.todo-edit', {type: 'text', value: todo.text, autofocus: true, attributes: { 'data-id': todo.id }});
  }
  return span(`.todo ${todo.completed ? '.completed' : ''}`, { attributes: { 'data-id': todo.id }}, todo.text);
}

function markTodoButtons(todo) {
  if(todo.completed) {
    return button('.unmark-todo', {key: `mark-${todo.id}`, type: 'button', value: todo.id}, 'unmark');
  }
  return button('.mark-todo', {key: `unmark-${todo.id}`, type: 'button', value: todo.id}, 'mark as done');
}

function todoItem(todo) {
  return li('.list-item',[
    todoBody(todo),
    button('.remove-todo', {type: 'button', value: todo.id}, 'remove'),
    markTodoButtons(todo)
  ]);
}

function archiveInfo(todos) {
  return footer('.archive-actions', [
    button('.archive', {type: 'button'}, 'Archive completed'),
    a('.archive-info', {href: '/todos/archive'}, [`${todos.archive.length} archived todos`])
  ]);
}

const view = (state$) => {
  return state$.map(todos =>
    section([
      header('.content-subhead', [
        h1('.brand-title', 'Todo App'),
        h2('.brand-tagline', 'RxJS+CycleJS'),
      ]),
      div('.todo-app', [
        input('.todo-input', {type: 'text', placeholder: 'Todo', value: ''}),
        ul(todos.items.map(todo => todoItem(todo))),
      ]),
      archiveInfo(todos)
    ])
  );
};

export default view;
