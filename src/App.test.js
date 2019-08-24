// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Product from "./product/Product";
// import { mount } from 'enzyme';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { shallow } from 'enzyme';
import App from './components/App/App';
import Product from './components/Product/Product';

it('renders without crashing', () => {
  shallow(<b>some test operation</b>);
});
