import React, {Component} from 'react';
import './Category.scss';
import {connect} from 'react-redux';
import * as actions from '../../actions';
//TODO: organize import correctly
import CategoryItem from './CategoryItem';

class Category extends Component {

  addToCartHandler = (e) => this.props.addToCart(e.target.id)

  render() {
    return (
      <div className="Category">
        <div>
          Category
        </div>
        <div className="Category-container">
          {
            this.props.products.visibleIds &&
            this.props.products.visibleIds.length &&
            this.props.products.visibleIds.map(i =>{
              let a = this.props.products.byId[i]
              return ( <CategoryItem
                onClick={this.addToCartHandler}
                key={a.id}
                data={a}/>)})
            }
        </div>
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
    // addToCart: id => dispatch(actions.add2Cart(id)),
    addToCart: id => dispatch(actions.addToCart(id)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
