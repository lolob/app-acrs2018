import React, { Fragment } from "react";
// eslint-disable-next-line no-unused-vars
import API from "./_laska_/API.js";
// eslint-disable-next-line no-unused-vars
import globals from "./_laska_/globals.js";
import withNavigationProp from "./_laska_/withNavigationProp.js";
import Icon from "./_laska_/Icon";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  SafeAreaView
} from "react-native";

const styles = StyleSheet.create({
  s6fe6027f: { fontSize: 40, marginLeft: 5 },
  s09064191: { alignItems: `center` },
  saac4f817: { alignItems: `center`, flex: 1, maxWidth: 50 },
  se98ced4a: { fontSize: 20, fontWeight: `bold`, textAlign: `center` },
  s81a4f220: {
    alignItems: `center`,
    flex: 1,
    justifyContent: `space-around`,
    paddingRight: 40
  },
  s5e2c0a7a: {
    backgroundColor: `rgba(237, 160, 170, 1)`,
    flex: 1,
    flexDirection: `row`
  },
  s507ea4a8: { backgroundColor: `rgba(79, 176, 77, 1)`, flex: 1 }
});
class QrWin extends React.PureComponent {
  static navigationOptions = { title: "QrWin" };
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
        <View style={styles.s507ea4a8}>
          <SafeAreaView>
            <View style={styles.s5e2c0a7a}>
              <View style={styles.saac4f817}>
                <TouchableHighlight style={styles.s09064191} onPress={() => {}}>
                  <Icon
                    iconIdentifier={`Ionicons/md-arrow-back`}
                    style={styles.s6fe6027f}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.s81a4f220}>
                <Text style={styles.se98ced4a}>QR CODE READER</Text>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Fragment>
    );
  }
}

QrWin.defaultProps = {};

QrWin = withNavigationProp(QrWin);

export default QrWin;

export { styles };
