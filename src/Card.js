import React from 'react';

class Card extends React.Component{

  deleteCard = () =>{
    this.props.onDeleteCard(this.props.listId,this.props.id);
  }
  
  render(){
    return (
      <div className='Card'>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <button onClick={this.deleteCard}>Delete</button>
      </div>
    );
  }
  
}

export default Card;