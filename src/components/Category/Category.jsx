import React, {Component} from 'react';
import './Category.scss';
import {connect} from 'react-redux';
import * as actions from '../../actions';
//TODO: organize import correctly
import CategoryItem from './CategoryItem';

class Category extends Component {


  render() {
    return (
      <div className="Category">
        <div>
          Category
        </div>
        {
          this.props.products &&
          this.props.products.length &&
          this.props.products.map(i => <CategoryItem key={i.id} data={i}/>)
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
