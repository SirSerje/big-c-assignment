import React from 'react';
import './Category.scss';
import {connect} from 'react-redux';
import * as actions from '../../actions';
//TODO: organize import correctly
import CategoryItem from './CategoryItem';

class Category extends React.PureComponent {

  addToCartHandler = (e) => this.props.addToCart(e.target.id);

  render() {
    return (
      <div className="Category">

        <div className="Category-container">
          {
            this.props.products.byId &&
            Object.values(this.props.products.byId)
              .sort((a, b) => a.id - b.id)
              .map(i =>
                <CategoryItem
                  onClick={this.addToCartHandler}
                  key={i.id}
                  data={i}/>)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({products}) => ({products});

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(actions.getAllProducts()),
  addToCart: id => dispatch(actions.addToCart(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Category);
