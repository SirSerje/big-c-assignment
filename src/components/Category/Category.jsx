import React from 'react';
import './Category.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import CategoryItem from './CategoryItem';


class Category extends React.PureComponent {
  render() {
    return (
      <div className="Category">
        <div className="Category-container">
          {
            this.props.products.byId
            && Object.values(this.props.products.byId)
              .sort((a, b) => a.id - b.id)
              .map((i) => (
                <CategoryItem
                  onClick={(e) => this.props.addToCart(e.target.id)}
                  key={i.id}
                  data={i}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  products: PropTypes.objectOf(PropTypes.object),
  addToCart: PropTypes.func,
};

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(actions.getAllProducts()),
  addToCart: (id) => dispatch(actions.addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
