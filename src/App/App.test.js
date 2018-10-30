// App.test.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import renderer from 'react-test-renderer'

it(`renders without crashing`, () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

// Take a snapshot and compare it
it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
  tree.children.map(ea => console.log(ea.children))
});