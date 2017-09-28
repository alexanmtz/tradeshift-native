import React, { Component } from "react";
import { connect } from "react-redux";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import Authentication from "./screens/Authentication/Authentication.screen";
import DocumentList from "./screens/DocumentList/DocumentList.screen";

export const routes = {
  Authentication: {
    screen: Authentication,
    routeName: 'Authentication'
  },
  DocumentList: {
    screen: DocumentList,
    routeName: 'DocumentList'
  },

};

export const Navigator = StackNavigator(routes, {
  initialRouteName: 'Authentication'
});

@connect(state => ({
  navigation: state.navigation
}))
export default class Navigation extends Component {
  render() {
    return (
      <Navigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation
        })}
      />
    );
  }
}
