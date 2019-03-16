import React from 'react';
import ReactDOM from 'react-dom'

const TodoList = () => {

  const items = ['learn React', 'Build Awesom App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }p</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = 'Type here for search'
  return <input placeholder={ searchText } />;
};

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'))
