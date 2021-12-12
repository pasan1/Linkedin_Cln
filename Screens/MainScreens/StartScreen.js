import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Button} from 'react-native-paper';
import BottomActionMenu from 'react-native-bottom-action-menu';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '457911414551-9j23clvb2kfqlki6l1enccn0uab27136.apps.googleusercontent.com',
});

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assests/screen1.png'),
        require('../../assests/screen2.png'),
        require('../../assests/screen3.png'),
      ],
    };
  }

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  componentDidMount() {
    // console.log(auth()._user.displayName);
    if (auth().currentUser != null) {
      console.log('Have user');
      this.props.navigation.navigate('TabNavScreen');
    } else {
      console.log('Have Not user');
    }
  }

  showMenu() {
    this.bottomActionMenu.show();
  }

  action() {
    console.log('Any action here');
    this.bottomActionMenu.close();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assests/LinkedIn_Logo.png')}
        />
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          dotStyle={{
            borderColor: '#646464',
          }}
          sliderBoxHeight={400}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
        <Button
          style={styles.btn1}
          onPress={() => this.props.navigation.navigate(SignupScreen)}>
          <Text style={styles.txt1}>Join now</Text>
        </Button>

        <TouchableOpacity style={styles.btn2} onPress={() => this.showMenu()}>
          <Image
            style={styles.tinyLogo2}
            source={require('../../assests/google-logo.png')}
          />
          <Text style={styles.txt2}>Join with Google</Text>
        </TouchableOpacity>
        <BottomActionMenu
          ref={bottomActionMenu => {
            this.bottomActionMenu = bottomActionMenu;
          }}
          onClose={() => {
            console.log('Some action to take during closing');
          }}>
          <Image
            style={styles.img3}
            source={require('../../assests/google-logo.png')}
          />
          <Text style={styles.txt4}>Google Account</Text>
          <Image
            style={styles.img4}
            source={require('../../assests/unlock.png')}
          />
          <Text style={styles.txt5}>Sign In with Google</Text>
          <Text style={styles.txt6}>How it works</Text>
          {/* <AwesomeIcon style={styles.txt7}  name="comments"/> */}
          <Text style={styles.txt7}>
            <AwesomeIcon style={styles.txt7} name="hand-point-up" />
            <Text> Fast and simple Sign-in no more password to remember</Text>
          </Text>
          <Text style={styles.txt7}>
            <AwesomeIcon style={styles.txt7} name="shield-alt" />
            <Text>
              {' '}
              Safe and secure. only your name, email and profile image are
              shared
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.btn3}
            onPress={() =>
              this.onGoogleButtonPress()
                .then(() => console.log('Signed in with Google!'))
                .then(() => this.props.navigation.navigate('TabNavScreen'))
            }>
            <Text style={styles.txt8}>Continue</Text>
          </TouchableOpacity>
        </BottomActionMenu>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(LoginScreen)}>
          <Text style={styles.txt3}>Sign In</Text>
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
  tinyLogo2: {
    marginTop: 10,
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginLeft: -215,
  },
  btn1: {
    marginTop: 10,
    backgroundColor: '#0A66C2',
    width: 310,
    height: 50,
    alignSelf: 'center',
    borderRadius: 30,
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
  txt1: {
    fontSize: 20,
    color: 'white',
  },
  txt2: {
    fontSize: 23,
    alignSelf: 'center',
    marginTop: -31,
    fontWeight: 'bold',
  },
  txt3: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 13,
    fontWeight: 'bold',
    color: '#0A66C2',
  },
  img3: {
    marginTop: -40,
    marginLeft: -5,
    width: 30,
    height: 30,
  },
  img4: {
    marginTop: 10,
    alignSelf: 'center',
    width: 130,
    height: 130,
  },
  txt4: {
    fontSize: 19,
    marginTop: -28,
    marginLeft: 35,
  },
  txt5: {
    fontSize: 23,
    alignSelf: 'center',
    // marginTop:-31,
    fontWeight: 'bold',
    color: '#202124',
  },
  txt6: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#202124',
  },
  txt7: {
    fontSize: 17,
    marginTop: 20,
  },
  btn3: {
    backgroundColor: '#0A66C2',
    width: 150,
    height: 45,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 4,
  },
  txt8: {
    color: 'white',
    fontSize: 19,
    alignSelf: 'center',
    marginTop: 8,
  },
});
