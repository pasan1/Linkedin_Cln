import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import TabNavScreen from '../TabNavScreen/TabNavScreen';

GoogleSignin.configure({
  webClientId:
    '457911414551-9j23clvb2kfqlki6l1enccn0uab27136.apps.googleusercontent.com',
});

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  userLogin = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user);
        console.log('User account created & signed in!');
        this.props.navigation.navigate(TabNavScreen);
      })
      .catch(error => {
        console.log('Wrong password!');
        console.error(error);
      });
  };

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  componentDidMount() {
    if (auth().currentUser != null) {
      console.log('Have user');
      this.props.navigation.navigate('TabNavScreen', {
        dName: auth()._user.displayName,
      });
    } else {
      console.log('Have Not user');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assests/LinkedIn_Logo.png')}
        />
        <TouchableOpacity>
          <Text style={styles.txt3}>Join now</Text>
        </TouchableOpacity>
        <Text style={styles.txt5}>Sign in</Text>
        <TextInput
          style={styles.txtinput1}
          label="Email or Phone"
          value={this.state.email}
          onChangeText={text => this.setState({email: text})}
        />
        <TextInput
          style={styles.txtinput2}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
        />
        <TouchableOpacity style={styles.btn3}>
          <Text style={styles.txt4}>Forgot password?</Text>
        </TouchableOpacity>
        <Button style={styles.btn1} onPress={this.userLogin}>
          <Text style={styles.txt1}>Sign in</Text>
        </Button>
        <Text style={styles.txt6}>or</Text>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() =>
            onGoogleButtonPress()
              .then(() => console.log('Signed in with Google!'))
              .then(() => this.props.navigation.navigate('TabNavScreen'))
          }>
          <Image
            style={styles.tinyLogo2}
            source={require('../../assests/google-logo.png')}
          />
          <Text style={styles.txt2}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={this.onGoogleButtonPress}>
          <Image
            style={styles.tinyLogo2}
            source={require('../../assests/apple-logo.png')}
          />
          <Text style={styles.txt2}>Sign in with Apple</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    color: '#FEFEFE',
  },
  tinyLogo: {
    marginTop: 10,
    width: 111,
    height: 27.7,
    marginLeft: 10,
  },
  txt3: {
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#0A66C2',
    marginTop: -25,
    marginLeft: 250,
  },
  txt4: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#0A66C2',
  },
  txt5: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#202124',
    marginTop: 20,
  },
  tinyLogo2: {
    marginTop: 10,
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: -238,
  },
  btn2: {
    marginTop: 10,
    width: 310,
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: '#646464',
    borderWidth: 1,
  },
  txt2: {
    fontSize: 23,
    alignSelf: 'center',
    marginTop: -31,
    fontWeight: 'bold',
  },
  btn1: {
    marginTop: 10,
    backgroundColor: '#0A66C2',
    width: 310,
    height: 50,
    alignSelf: 'center',
    borderRadius: 30,
  },
  txt1: {
    fontSize: 20,
    color: 'white',
  },
  txtinput1: {
    marginTop: 10,
  },
  txtinput2: {
    marginTop: 10,
  },
  btn3: {
    marginTop: 15,
    width: 150,
    height: 25,
  },
  txt6: {
    alignSelf: 'center',
    marginTop: 15,
  },
});
