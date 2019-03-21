import React from 'react';
import Card from './Card.js';

class List extends React.Component{
  
  addCard =() =>{
    this.props.onAddCard(this.props.id,this.props.cards);
  }
  
  render(){
    const list = this.props.cards.map(card => 
    <Card 
    key={card.id} 
    id = {card.id}
    title={card.title} 
    content={card.content} 
    onDeleteCard={this.props.onDeleteCard}
    listId={this.props.id}
    />);
    return (
      <section className="List">
          <header className='List-header'>
            <h2>{this.props.header}</h2>
            <button onClick={this.addCard}>Add Random Card</button>
            <div className='List-cards'>
              {list}
            </div>
          </header>
      </section>
    );
  }
  
}

export default List;