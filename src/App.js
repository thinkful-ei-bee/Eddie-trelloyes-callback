import React from 'react';
import List from './List.js';

class App extends React.Component {

  state = {
    allCards: this.props.store.allCards,
    lists: this.props.store.lists
  }

  createRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  addCard = (id) =>{
    console.log('adding card...');
    const newCard = this.createRandomCard();
    const currList = this.state.lists.find(list => list.id === id);
    const newCardIds = [...currList.cardIds,newCard.id];
    this.setState({
      allCards: {
        ...this.state.allCards,
        [newCard.id]:newCard 
      },
      lists: this.state.lists.map(list =>
        list.id === id ? {...list, cardIds: newCardIds} : {...list}
      )
    })
  }

  omit = (obj, keyToOmit) =>{
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  deleteCard = (listId, key) =>{
    console.log('deleting...');
    const newAllCards = {...this.state.allCards}
    const currList = this.state.lists.find(list => list.id === listId); 
    this.omit(newAllCards,key)
    this.setState({
      allCards: newAllCards,
      lists: this.state.lists.map(list =>
        list.id === listId ? {...list, cardIds: currList.cardIds.filter(letter=>key!==letter)} : {...list}
      )
    })
  }
  
  render(){
    const lists = this.state.lists.map(list => <List 
      key={list.id}
      id = {list.id} 
      header={list.header} 
      cards={list.cardIds.map(letter=>{
        return {...this.state.allCards[letter],id:letter}
      })}
      onAddCard={this.addCard}
      onDeleteCard={this.deleteCard}
      ></List>)

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
}

export default App;