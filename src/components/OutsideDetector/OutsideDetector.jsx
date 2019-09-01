import React from 'react';
import PropTypes from 'prop-types';

export default class OutsideDetector extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      // eslint-disable-next-line no-unused-expressions,react/destructuring-assignment
      this.props.clickOutside && this.props.clickOutside();
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideDetector.propTypes = {
  children: PropTypes.node.isRequired,
  clickOutside: PropTypes.func,
};
