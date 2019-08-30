import React from 'react';
import {Link, Route} from 'react-router-dom';
import * as actions from '../../actions';
import './App.scss';
import {connect} from 'react-redux';
import Category from '../Category';
import CartComponent from '../CartComponent';
import Product from '../Product';
import CartPopup from '../CartPopup'
import OutsideDetector from "../OutsideDetector";

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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header--logo">big-c-assignment</div>
          <div className="App-header--menu">
            <span>   <Link to="/">Category</Link></span>
          </div>
          <div className="App-header--cart">
            <span>{
              this.state.isModalOpen
                ? <p onClick={()=> this.setState({isModalOpen:false})}>close cart</p>
                : <b onClick={()=> this.setState({isModalOpen:true})}>show cart</b>

            } </span>
          </div>

        </header>
        <OutsideDetector clickOutside={() => this.setState({isModalOpen: false})}>
          {this.state.isModalOpen && <CartPopup/>}
        </OutsideDetector>

        <Route exact path="/" component={Category}/>
        <Route path="/cart" component={CartComponent}/>
        <Route path="/product/:id" component={Product}/>


      </div>
    );
  }
}


const mapStateToProps = ({products}) => products

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(actions.getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
