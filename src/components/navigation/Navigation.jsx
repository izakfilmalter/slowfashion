import React, { Component } from 'react';

import {
  Link,
  Links,
  Logo,
  NavigationContainer,
} from './styles';

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Logo>
          Slow
          <br />
          Fashion
        </Logo>

        <Links>
          <Link>Ladies</Link>
          <Link active>Gentleman</Link>
          <Link right>You</Link>
        </Links>
      </NavigationContainer>
    );
  }
}

export default Navigation;
