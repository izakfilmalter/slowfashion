import React, { Component, PropTypes } from 'react';

import Navigation from '../navigation/Navigation';

import {
  ApplicationContainer
} from './styles';

class Application extends Component {
  static propTypes = {
    Component: PropTypes.func,
  };

  render() {
    const {
      Component,
    } = this.props;

    return (
      <ApplicationContainer>
        <Navigation />
        <Component />
      </ApplicationContainer>
    );
  }
}

export default Application;
