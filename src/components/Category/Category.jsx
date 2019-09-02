import React from 'react';
import './Category.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
// TODO: organize import correctly
import CategoryItem from './CategoryItem';
import {ROOT_LOCATION} from '../../constants';


class Category extends React.PureComponent {
  render() {
    return (
      <div className="Category">

        <div className="Category-container">
          <div className="Category-container--front">

            <div className="SSSSS">
              <div className="SSSSS-title">Plates</div>
              <div className="SSSSS-description">Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </div>
            </div>
            <img src={`${ROOT_LOCATION}/media/plates-header.jpg`}/>

          </div>
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

const mapStateToProps = ({products}) => ({products});

const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(actions.getAllProducts()),
  addToCart: (id) => dispatch(actions.addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
