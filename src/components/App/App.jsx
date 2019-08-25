import React from 'react';
import {Link, Route} from 'react-router-dom';
import * as actions from '../../actions';
import './App.scss';
import {connect} from 'react-redux';
import Category from '../Category';
import Cart from '../Cart';
import Product from '../Product';
import CartPopup from '../CartPopup'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = ({
      isModalOpen: true,
    });
  }

  //Get info about products, when app just loaded
  componentDidMount() {
    this.props.init();
  }

  showCartPopup = () => this.setState({isModalOpen: !this.state.isModalOpen});

  render() {
    return (
      <div className="App">
        <header>
          <span>   <Link to="/">Category</Link></span>
          <span> <b onClick={this.showCartPopup}>show cart</b></span>
        </header>
        {this.state.isModalOpen && <CartPopup />}
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
    init: () => dispatch(actions.getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
