import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './App.scss';
import Category from '../Category';
import CartComponent from '../Cart';
import Product from '../Product';
import CartPopup from '../Popup';
import OutsideDetector from '../OutsideDetector';
import { getTotalQuantity } from '../../reducers';
import { ROOT_LOCATION } from '../../constants';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = ({
      isModalOpen: false,
    });
  }

  componentDidMount() {
    this.props.init();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.setState({ isModalOpen: false });
  }

  cartPopupAvailable() {
    return this.props.location.pathname !== '/cart';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header--logo">
            <img src={`${ROOT_LOCATION}/media/logo.png`} alt="Logo" />
          </div>
          <div className="App-header--menu">
            <span>
              <Link to="/">Category</Link>
            </span>
          </div>
          <div className="App-header--cart">
            {this.cartPopupAvailable() && (
              <span>
                {
                  this.state.isModalOpen
                    ? <p onClick={() => this.setState({ isModalOpen: false })}>close cart</p>
                    : (
                      <b onClick={() => this.setState({ isModalOpen: true })}>
                        show cart
                        {this.props.quantity > 0 && `(${this.props.quantity})`}
                      </b>
                    )
                }
              </span>
            )}
          </div>
        </header>
        <OutsideDetector clickOutside={() => this.setState({ isModalOpen: false })}>
          {this.state.isModalOpen && <CartPopup />}
        </OutsideDetector>

        <Route exact path="/" component={Category} />
        <Route path="/cart" component={CartComponent} />
        <Route path="/product/:id" component={Product} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  init: PropTypes.func,
  quantity: PropTypes.string,
};


const mapStateToProps = (state) => ({
  products: state.products,
  quantity: getTotalQuantity(state),
});

const mapDispatchToProps = (dispatch) => ({ init: () => dispatch(actions.getAllProducts()) });
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
