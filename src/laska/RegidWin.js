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
  TextInput,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";

const styles = StyleSheet.create({
  s7b822ace: { fontSize: 40, paddingLeft: 5 },
  s51739428: { alignItems: `center` },
  s094355bb: { flex: 1, maxWidth: 50 },
  s0e4d5ce4: { fontSize: 20, fontWeight: `bold`, textAlign: `center` },
  s8dd8527b: {
    alignItems: `center`,
    flex: 1,
    justifyContent: `space-around`,
    paddingRight: 40
  },
  sb61879f0: {
    backgroundColor: `rgba(237, 160, 170, 1)`,
    flex: 1,
    flexDirection: `row`
  },
  sf43c7342: {
    alignItems: `center`,
    flex: 0,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    width: `100%`
  },
  s59935447: {
    fontSize: 20,
    fontWeight: `bold`,
    paddingTop: 250,
    textAlign: `center`
  },
  se4de19c9: {
    backgroundColor: `rgba(255, 255, 255, 1.0)`,
    fontSize: 30,
    margin: 10,
    marginBottom: 20,
    maxWidth: 300,
    minWidth: 1,
    padding: 10,
    width: `100%`
  },
  scae8ad6e: { marginTop: 80 },
  s5c296643: { alignItems: `center`, flex: 1 },
  sedab899b: { flex: 1 },
  s0c2164c5: { backgroundColor: `rgba(79, 176, 77, 1)`, flex: 1 }
});
class RegidWin extends React.PureComponent {
  static navigationOptions = { title: "RegidWin" };
  constructor(props) {
    super(props);

    this.state = {
      isLoadingParticipantDetail: false,
      regID: null,
      participantData: null,
      errorMessage: null
    };

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
        <View style={styles.s0c2164c5}>
          <SafeAreaView>
            <View style={styles.sb61879f0}>
              <View style={styles.s094355bb}>
                <TouchableHighlight style={styles.s51739428} onPress={() => {}}>
                  <Icon
                    iconIdentifier={`Ionicons/md-arrow-back`}
                    style={styles.s7b822ace}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.s8dd8527b}>
                <Text style={styles.s0e4d5ce4}>REGISTRATION ID</Text>
              </View>
            </View>
          </SafeAreaView>
          <KeyboardAvoidingView style={styles.sedab899b}>
            <View style={styles.s5c296643}>
              <Fragment>
                <View style={styles.sf43c7342}>
                  <Text>{state.errorMessage}</Text>
                </View>
                <Text style={styles.s59935447}>Enter a registration id:</Text>
                <TextInput
                  autoCapitalize={`characters`}
                  keyboardType={`numeric`}
                  onChangeText={newText => {
                    setState({
                      idNo: newText
                    });
                  }}
                  placeholder={`e.g. 20189000001`}
                  style={styles.se4de19c9}
                  value={state.idNo || ""}
                />
                <Button
                  disabled={!state.regID || !state.regID.length}
                  onPress={() => {
                    // Set our UI to a loading state
                    // Note that you can preview these using Presets inside the editor.
                    setState({
                      isLoadingParticipantDetail: true
                    });
                    // First, get weather datafrom the OpenWeatherMap API
                    fetch(`http://192.168.30.109:8000/get/20189000014/`)
                      // Fetch requires us to convert the response to JSON
                      .then(response => response.json())

                      // Finally, we have the actual data from the OpenWeatherMap API
                      .then(response => {
                        const statusResponse = parseInt(response.cod, 10);
                        if (statusResponse === 200) {
                          // Navigate to Weather Info and pass in our data
                          navigate("participant-detail-win", {
                            participantData: response,
                            regID: state.regID
                          });
                          // Once navigation has ended, clear our state so we can search for a new city
                          // if we come back.
                          // (Instead of a timeout, this should use a navigation lifecycle event
                          // which is currently not supported yet.)
                          setTimeout(() => {
                            setState({
                              errorMessage: null,
                              isLoadingParticipantDetail: false
                            });
                          }, 1000);
                        } else if (statusResponse === 404) {
                          setState({
                            isLoadingParticipantDetail: false,
                            errorMessage: "Registration ID does not exist!"
                          });
                        } else {
                          setState({
                            isLoadingParticipantDetail: false,
                            errorMessage: "An unknown error occurred."
                          });
                        }
                      })
                      .catch(() => {
                        // If any error occured, we display a generic connection error.
                        setState({
                          isLoadingParticipantDetail: false,
                          errorMessage: "Could not connect!"
                        });
                      });
                  }}
                  title={`Submit`}
                />
              </Fragment>
              {state.isLoadingParticipantDetail ? (
                <Fragment>
                  <ActivityIndicator
                    color={`rgba(255, 255, 255, 1)`}
                    size={`large`}
                    style={styles.scae8ad6e}
                  />
                </Fragment>
              ) : null}
            </View>
          </KeyboardAvoidingView>
        </View>
      </Fragment>
    );
  }
}

RegidWin.defaultProps = {};

RegidWin = withNavigationProp(RegidWin);

export default RegidWin;

export { styles };
