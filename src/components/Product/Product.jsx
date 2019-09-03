import React from 'react';
import './Product.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct } from '../../reducers';
import * as actions from '../../actions';
import { ROOT_LOCATION } from '../../constants';


class Product extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      counter: 1,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(i) {
    this.setState((prevState) => ({ counter: prevState.counter + i }));
  }

  renderDescription({
    title, price, image, brand, description,
  }) {
    return (
      <div className="Product--content">
        <div className="Product--content-image">
          {/* eslint-disable-next-line no-undef */}
          <img src={`${ROOT_LOCATION}/media/${image}`} alt={title} />
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
              <button type="button" onClick={() => this.changeQuantity(+1)}>
                +
              </button>
              <button
                type="button"
                onClick={() => {
                  // eslint-disable-next-line no-unused-expressions
                  this.state.counter > 1 && this.changeQuantity(-1);
                }}
              >
                -
              </button>
              <button
                type="button"
                id={this.state.id}
                onClick={() => this.props.addToCart(this.state.id,
                  this.state.counter)}
              >
                add to cart
              </button>
              <b>{this.state.counter}</b>
            </div>
          </>
        ) : (<b>sorry, no item found</b>)}
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  addToCart: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.string,
  }),
};

const mapStateToProps = (state, b) => ({
  product: getProduct(state, b.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, quantity) => dispatch(actions.addToCart(id, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
