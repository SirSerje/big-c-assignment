import React from 'react';
import './Product.scss';
import { connect } from 'react-redux';
import { getProduct } from '../../reducers';
import * as actions from '../../actions';

class Product extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      counter: 1,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  // TODO: add arrow function (check react config)
  changeQuantity(i) {
    this.setState({ counter: this.state.counter + i });
  }

  renderDescription({
    title, price, image, brand, description,
  }) {
    return (
      <div className="Product--content">
        <div className="Product--content-image">
          <img src={`${window.location.origin}/media/${image}`} alt={title} />
        </div>
        <div className="Product--content-description">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="price">
            &#36;
            {price}
          </div>
          <div className="brand">{brand}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Product">

        {this.props.product ? (
          <>
            {this.renderDescription({ ...this.props.product })}

            <div className="Product--controls">
              <button onClick={() => this.changeQuantity(+1)}>+</button>
              <button onClick={() => this.changeQuantity(-1)}>-</button>
              <button
                id={this.props.state}
                onClick={() => this.props.addToCart(this.state.id, this.state.counter)}
              >
                {' '}
add to
              cart
              </button>
              <b>{this.state.counter}</b>
            </div>
          </>
        ) : (<b>sorry, no item found</b>)}
      </div>
    );
  }
}

const mapStateToProps = (state, b) => ({
  product: getProduct(state, b.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, quantity) => dispatch(actions.addToCart(id, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
