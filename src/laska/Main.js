import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button
} from "react-native";
import img271fc7e8 from "./img/logoacrs2018.png";

const styles = StyleSheet.create({
  s16ad9c2d: { fontSize: 40, fontWeight: `bold`, textAlign: `center` },
  s6c6cca0f: {
    flex: 1,
    justifyContent: `space-around`,
    top: 50,
    flexDirection: `row`
  },
  s271fc7e8: { height: 100, padding: 130, top: 25, width: 100 },
  se366ccc4: {
    alignItems: `center`,
    flex: 1,
    justifyContent: `space-around`,
    flexDirection: `row`
  },
  sc1bdbae4: { flex: 1, justifyContent: `flex-end`, padding: 50 },
  s44c1ac2f: { flex: 1, justifyContent: `flex-end`, padding: 50 },
  sa936a04b: { flex: 1, justifyContent: `flex-end`, padding: 50 },
  s161e03d1: { backgroundColor: `rgba(79, 176, 77, 1)`, flex: 1 }
});
class Main extends React.PureComponent {
  static navigationOptions = { title: "Main" };
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
        <View style={styles.s161e03d1}>
          <SafeAreaView>
            <View style={styles.s6c6cca0f}>
              <Text style={styles.s16ad9c2d}>REGISTRATION</Text>
            </View>
            <View style={styles.se366ccc4}>
              <Image source={img271fc7e8} style={styles.s271fc7e8} />
            </View>
          </SafeAreaView>
          <View style={styles.sc1bdbae4}>
            <Button title={`REGISTRATION ID`} onPress={() => {}} />
          </View>
          <View style={styles.s44c1ac2f}>
            <Button title={`QR CODE READER`} onPress={() => {}} />
          </View>
          <View style={styles.sa936a04b}>
            <Button
              color={`rgba(192, 21, 80, 1)`}
              title={`EXIT`}
              onPress={() => {}}
            />
          </View>
        </View>
      </Fragment>
    );
  }
}

Main.defaultProps = {};

Main = withNavigationProp(Main);

export default Main;

export { img271fc7e8, styles };
