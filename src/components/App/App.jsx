import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import * as actions from '../../actions';
import './App.scss';
import {connect} from 'react-redux';
import Category from '../Category';
import Cart from '../Cart';
import Product from '../Product';

class App extends Component {

  //Get info about products, when app just loaded
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/cart">My Cart</Link> <br/>
          <Link to="/">Category</Link> <br/>
          <Link to="/product/1">product/1</Link> <br/>
        </header>

        <Route exact path="/" component={Category}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:id" component={Product}/>


      </div>
    );
  }
}


const mapStateToProps = ({products}) => {
  //TODO sort products by id
  return {
    products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(actions.init()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
