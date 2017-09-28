import './ReactotronConfig';
import Reactotron from 'reactotron-react-native'
import { AppLoading } from "expo";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Text, ActivityIndicator } from "react-native";

import Navigation from "./navigation";
import { getStore } from "./store";
import { initializeAssets } from "./assets";

const store = getStore();
const userIsAuthenticated = false;

const getComponentOrLoading = (assetsReady, userIsAuthenticated) => {
  if(!assetsReady) {
    return (<AppLoading />)
  }
  return (<Navigation />)
}

export default class App extends Component {
  state = { assetsReady: false,}

  componentWillMount() {
    // setInitialSessionId();
  }

  componentDidMount() {
    const showAppContent = () => {
      store.dispatch(() => { type: 'bluuuuuu'})
			Reactotron.log('assets are readyyy');
			this.setState({assetsReady: true})
		}
    initializeAssets.then(function(response) {
      showAppContent();
    })
  }

  render() {
    return (
      <Provider store={store}>
        {getComponentOrLoading(this.state.assetsReady, userIsAuthenticated)}
      </Provider>
    );
  }
}
