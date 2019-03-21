import React from 'react';
import Card from './Card.js';

function List(props){
  const list = props.cards.map((card,index) => <Card key={index} title={card.title} content={card.content}></Card>);
  return (
    <section className="List">
        <header className='List-header'>
          <h2>{props.header}</h2>
          <div className='List-cards'>
            {list}
          </div>
        </header>
    </section>
  );
}

export default List;