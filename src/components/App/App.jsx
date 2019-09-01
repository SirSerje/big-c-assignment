import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './App.scss';
import Category from '../Category';
import CartComponent from '../Cart';
import Product from '../Product';
import CartPopup from '../Popup';
import OutsideDetector from '../OutsideDetector';

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
          <div className="App-header--logo">big-c-assignment</div>
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
                    : <b onClick={() => this.setState({ isModalOpen: true })}>show cart</b>
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


const mapStateToProps = ({ products }) => products;
const mapDispatchToProps = (dispatch) => ({ init: () => dispatch(actions.getAllProducts()) });
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
