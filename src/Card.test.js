import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe('<Card />',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title={'Card Title'} content={'Content...'}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render the UI as expected', ()=>{
    const tree = renderer
      .create(<Card title={'Card Title'} content={'Content...'}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});