import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StyleSheet, Alert } from 'react-native'
import { Text, View } from 'react-native-animatable'
import { NavigationActions } from 'react-navigation';

import { authenticate } from '../../api/authentication';

import Button from '../../components/Button'
import TextInput from '../../components/TextInput/TextInput.component'
import measures from '../../constants/measures'

class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.authenticate = this.authenticate.bind(this);
  }

  async authenticate() {
    /*authenticate(
      this.state.email,
      this.state.password
    ).then(() => {
      this.props.goto();
    }).catch((e) => {
      this.errorDispatch(e)
    });*/
    this.props.goto();
  }

  errorDispatch = (e) => {
    Alert.alert(
        'Login error',
        'Please check your user and / or password',
        [
            { text: 'Try again', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
    );
    console.log('error', e);
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render () {
    const { email, password } = this.state
    const { isLoading, onSignupLinkPress, onSignInPress } = this.props
    const isValid = email !== '' && password !== ''
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => { this.formRef = ref }}>
          <TextInput
            name={'email'}
            ref={(ref) => this.emailInputRef = ref}
            placeholder={'Email'}
            keyboardType={'email-address'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ email: value })}
            isEnabled={!isLoading}
          />
          <TextInput
            name={'password'}
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Password'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <Button
              onPress={this.authenticate}
              isEnabled={isValid}
              isLoading={isLoading}
              buttonStyle={styles.signInButton}
              textStyle={styles.signInButtonText}
              text={'Log In'}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signupLink}
            onPress={() => this.props.back() }
            animation={'fadeIn'}
            duration={600}
            delay={400}
          >
            {'Not registered yet?'}
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
    navigation: state.navigation
});

const mapDispatchToProps = dispatch => ({
    goto: () => (
        dispatch(NavigationActions.navigate({routeName: 'DocumentList'}))
    ),
    back: () => (
        dispatch(NavigationActions.navigate({routeName: 'Authentication'}))
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: measures.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  signInButton: {
    width: 600,
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)'
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 14
  },
  signupLink: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})
