import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Main from "./Main.js";
import RegidWin from "./RegidWin.js";
import QrWin from "./QrWin.js";
import ParticipantDetailWin from "./ParticipantDetailWin.js";
import { createStackNavigator } from "react-navigation";

const StackNavigatore17dcb03 = createStackNavigator(
  {
    main: {
      screen: Main
    },
    "regid-win": {
      screen: RegidWin
    },
    "qr-win": {
      screen: QrWin
    },
    "participant-detail-win": {
      screen: ParticipantDetailWin
    }
  },
  {
    navigationOptions: {
      header: null
    },
    initialRouteName: "main"
  }
);

class App extends React.PureComponent {
  static navigationOptions = { title: "App" };
  constructor(props) {
    super(props);

    this.state = {};

    if (this.awake) {
      this.awake();
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { props, state } = this;
    // eslint-disable-next-line no-unused-vars
    const helpers = this;
    // eslint-disable-next-line no-unused-vars
    const setState = this.setState.bind(this);
    // eslint-disable-next-line no-unused-vars
    const { navigate, goBack } = props.navigation || {};

    return (
      <Fragment>
        <StackNavigatore17dcb03 />
      </Fragment>
    );
  }
}

App.defaultProps = {};

App = withNavigationProp(App);

export default App;

export {};
