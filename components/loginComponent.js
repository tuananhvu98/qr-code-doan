import React, {Component} from 'react';
import 'react-native-gesture-handler';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Divider = (props) => {
  return (
    <View {...props}>
      <View style={styles.line} />
      <Text style={styles.textOr}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

export default class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      nameValidate: true,
      password: '',
    };
  }

  validate(text, type) {
    const errors = {};
    const rgEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (type == 'email') {
      if (rgEmail.test(text)) {
        this.setState ({
          nameValidate: true,
        });
      } else {
        this.setState ({
          nameValidate: false,
        });
      }
    }
  }

  render() {
    const {navigation} = this.props;
    return (
      // an ra ngoai man hinh thi tut keyboard xuong
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containter}>
          <View style={styles.up}>
            <Ionicons name="qr-code-outline" size={150}></Ionicons>
            {/* <Text style={styles.title}>Welcome to WRU</Text> */}
          </View>

          <View style={styles.down}>
            {/* input email */}
            <View style={[styles.textInputContainer, !this.state.nameValidate? styles.errors:null]}>
              <TextInput
                name="inputEmail"
                style={styles.textInput}
                onChangeText={(text) => this.validate(text, 'email')}
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Enter your email"
              />
            </View>

            {/* input password */}
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                // value = {{this.state.placeholder}}
                secureTextEntry={true}
              />
            </View>

            {/* button login */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('TabBarScreen')}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>

            {/* divider -------------- */}
            <Divider style={styles.divider} />

            {/* login with gmail */}
            <FontAwesome.Button
              style={styles.googleButton}
              name="google"
              backgroundColor="#2E9AFE"
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.loginButtonTitle}>Login With Google</Text>
            </FontAwesome.Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'stretch',
    backgroundColor: '#04B486',
  },

  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    color: '#111',
    fontSize: 26,
    textAlign: 'center',
  },
  textInputContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 300,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE2E64',
    marginBottom: 5,
  },
  loginButtonTitle: {
    color: 'white',
    fontSize: 20,
  },
  googleButton: {
    width: 300,
    height: 40,
    justifyContent: 'center',
    borderRadius: 15,
  },
  line: {
    flex: 2,
    height: 1,
    backgroundColor: 'black',
  },
  textOr: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    width: 290,
    height: 40,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errors: {
    borderWidth: 4,
    borderColor: 'red',
  },
});
