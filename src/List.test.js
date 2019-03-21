import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

describe('<List />', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header={'Test Header'} cards={[{title:'Test Title',content:'Test Content'}]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render the UI as expected', ()=>{
    const tree = renderer
      .create(<List header={'Test Header'} cards={[{title:'Test Title',content:'Test Content'}]}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});