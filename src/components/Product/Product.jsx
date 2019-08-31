import React, {Component} from 'react';
import './Product.scss';
import {connect} from 'react-redux';
import {getProduct} from '../../reducers';
import * as actions from '../../actions';
import ProductDescription from './ProductDescription';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      counter: 1,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  //TODO: add arrow function (check react config)
  changeQuantity(i) {
    this.setState({counter: this.state.counter + i});
  }


  //FIXME : should be input instead text
  //TODO: change add to cart handler

  render() {
    return (
      <div className="Product">

        {this.props.product ? (<ProductDescription {...this.props.product}>

          <button onClick={() => this.changeQuantity(+1)}>+</button>
          <button onClick={() => this.changeQuantity(-1)}>-</button>
          <button
            id={this.props.state}
            onClick={() => this.props.addToCart(this.state.id, this.state.counter)}
          > add to
            cart
          </button>
          <b>{this.state.counter}</b>
        </ProductDescription>) : (<b>sorry, no item found</b>)}


      </div>
    );
  }
}

const mapStateToProps = (state, b) => {
  return {
    product: getProduct(state, b.match.params.id),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, quantity) => dispatch(actions.addToCart(id, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
