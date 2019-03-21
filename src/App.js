import React from 'react';
import List from './List.js';

function App(props) {
  let lists = props.store.lists.map(list => <List key={list.id} header={list.header} cards={list.cardIds.map(letter=>props.store.allCards[letter])}></List>)
  return (
    <main className='App'>
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {lists}
    </div>
    </main>
  );
}

export default App;