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
  SafeAreaView,
  ScrollView,
  Button
} from "react-native";
import moment from "moment";

const styles = StyleSheet.create({
  sdd305d70: { fontSize: 40, marginLeft: 5 },
  s14d51f21: { alignItems: `center`, flex: 1, maxWidth: 50 },
  s80cb2483: { fontSize: 20, fontWeight: `bold`, textAlign: `center` },
  sed2a031e: {
    alignItems: `center`,
    flex: 1,
    justifyContent: `space-around`,
    paddingRight: 40
  },
  s6f7e5a6d: {
    backgroundColor: `rgba(237, 160, 170, 1)`,
    flex: 1,
    flexDirection: `row`
  },
  s4febc5ee: { color: `rgba(21, 19, 19, 1)`, fontSize: 20, fontWeight: `bold` },
  s713ab769: { flex: 1 },
  s39dd705a: {
    color: `rgba(228, 227, 237, 1)`,
    fontSize: 20,
    fontWeight: `bold`
  },
  s1cb14b95: { flex: 1 },
  s2383004b: {
    alignItems: `center`,
    justifyContent: `center`,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingTop: 5,
    flexDirection: `row`
  },
  s06cad0ee: {
    alignItems: `center`,
    flex: 1,
    height: 50,
    justifyContent: `center`
  },
  s710f3cfe: {
    alignItems: `center`,
    flex: 1,
    height: 50,
    justifyContent: `center`
  },
  s5eaf9663: {
    alignItems: `flex-end`,
    flex: 1,
    maxHeight: 50,
    flexDirection: `row`
  },
  s3cbe1940: {
    alignItems: `center`,
    flex: 1,
    height: 50,
    justifyContent: `center`
  },
  s5c9120eb: {
    alignItems: `center`,
    flex: 1,
    height: 50,
    justifyContent: `center`
  },
  scf4e3114: { flex: 1, maxHeight: 50, flexDirection: `row` },
  sef075fe7: { backgroundColor: `rgba(79, 176, 77, 1)`, flex: 1 }
});
class ParticipantDetailWin extends React.PureComponent {
  static navigationOptions = { title: "ParticipantDetailWin" };
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
        <View style={styles.sef075fe7}>
          <SafeAreaView>
            <View style={styles.s6f7e5a6d}>
              <View style={styles.s14d51f21}>
                <TouchableHighlight
                  onPress={() => {
                    goBack();
                  }}
                >
                  <Icon
                    iconIdentifier={`Ionicons/md-arrow-back`}
                    style={styles.sdd305d70}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.sed2a031e}>
                <Text style={styles.s80cb2483}>PARTICIPANT DETAIL</Text>
              </View>
            </View>
          </SafeAreaView>
          <ScrollView>
            <View style={styles.s2383004b}>
              <View style={styles.s713ab769}>
                <Text style={styles.s4febc5ee}>Text string</Text>
              </View>
              <View style={styles.s1cb14b95}>
                <Text style={styles.s39dd705a}>Text string</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.s5eaf9663}>
            <View style={styles.s06cad0ee}>
              <Button title={`CHECK-IN`} onPress={() => {}} />
            </View>
            <View style={styles.s710f3cfe}>
              <Button title={`COMPLETE PAYMENT`} onPress={() => {}} />
            </View>
          </View>
          <View style={styles.scf4e3114}>
            <View style={styles.s3cbe1940}>
              <Button title={`Lunch buffet`} onPress={() => {}} />
            </View>
            <View style={styles.s5c9120eb}>
              <Button title={`CULTURAL NIGHT`} onPress={() => {}} />
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}

ParticipantDetailWin.defaultProps = {
  participantData: null,
  regID: `20189000014`
};

ParticipantDetailWin = withNavigationProp(ParticipantDetailWin);

export default ParticipantDetailWin;

export { styles };
