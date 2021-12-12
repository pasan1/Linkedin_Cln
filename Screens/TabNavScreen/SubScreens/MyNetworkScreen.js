import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

export default class MyNetworkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      profileImage: auth().currentUser.photoURL,
    };
  }

  onChangeSearch(query) {
    setSearchQuery(query);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.img1} source={{uri: this.state.profileImage}} />
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={this.onChangeSearch}
          value={this.state.searchQuery}
        />
        <AwesomeIcon
          style={styles.icon1}
          name="comment-dots"
          color={'#666666'}
          size={30}
        />
        <ScrollView>
          <View style={styles.view1}>
            <TouchableOpacity>
              <Text style={styles.txt1}>Manage my network</Text>
              <AwesomeIcon
                style={styles.icon2}
                name="chevron-right"
                color={'#666666'}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.view2}>
            <TouchableOpacity>
              <Text style={styles.txt2}>Invitations</Text>
              <AwesomeIcon
                style={styles.icon2}
                name="chevron-right"
                color={'#666666'}
                size={20}
              />
            </TouchableOpacity>

            <View style={styles.view3}>
              <Image
                style={styles.img2}
                source={require('../../../assests/user.png')}
              />
              <Text style={styles.txt3}>Kamal Perera</Text>
              <Text style={styles.txt4}>Student at Ruhuna..</Text>
              <Text style={styles.txt5}>Ruhuna University of..</Text>
              <AwesomeIcon
                style={styles.icon3}
                name="building"
                color={'#666666'}
              />
              <TouchableOpacity style={styles.btn1}>
                <AwesomeIcon
                  style={styles.icon4}
                  name="check-circle"
                  color={'#0A66C2'}
                  size={38}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn2}>
                <AwesomeIcon
                  style={styles.icon5}
                  name="times-circle"
                  color={'#666666'}
                  size={38}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.view3}>
              <Image
                style={styles.img2}
                source={require('../../../assests/user.png')}
              />
              <Text style={styles.txt3}>Nihal Fernando</Text>
              <Text style={styles.txt4}>Student at Colombo..</Text>
              <Text style={styles.txt5}>Colombo University of..</Text>
              <AwesomeIcon
                style={styles.icon3}
                name="building"
                color={'#666666'}
              />
              <TouchableOpacity style={styles.btn1}>
                <AwesomeIcon
                  style={styles.icon4}
                  name="check-circle"
                  color={'#0A66C2'}
                  size={38}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn2}>
                <AwesomeIcon
                  style={styles.icon5}
                  name="times-circle"
                  color={'#666666'}
                  size={38}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.view4}>
            <Text style={styles.txt6}>More Suggetions for you</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E5DF',
    color: '#FEFEFE',
  },
  img1: {
    marginTop: 10,
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  searchbar: {
    width: 250,
    marginLeft: 60,
    marginTop: -40,
  },
  icon1: {
    marginLeft: 323,
    marginTop: -40,
  },
  txt1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A66C2',
    marginLeft: 15,
    marginTop: 13,
  },
  view1: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    height: 55,
  },
  icon2: {
    marginLeft: 333,
    marginTop: -22,
  },
  view2: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    height: 225,
  },
  txt2: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0A66C2',
    marginLeft: 15,
    marginTop: 15,
  },
  view3: {
    marginTop: 5,
    backgroundColor: '#D1DBE4',
    height: 85,
  },
  img2: {
    marginTop: 10,
    marginLeft: 10,
    width: 60,
    height: 60,
  },
  txt3: {
    fontWeight: 'bold',
    color: '#232325',
    marginLeft: 77,
    marginTop: -62,
  },
  txt4: {
    marginLeft: 77,
  },
  txt5: {
    marginLeft: 94,
  },
  icon3: {
    marginLeft: 77,
    marginTop: -15,
  },
  btn1: {
    width: 40,
    height: 40,
    marginLeft: 257,
    marginTop: -45,
    borderRadius: 100,
  },
  icon4: {
    alignSelf: 'center',
    // marginTop:20
  },
  btn2: {
    width: 40,
    height: 40,
    marginLeft: 307,
    marginTop: -40,
    borderRadius: 100,
  },
  icon5: {
    alignSelf: 'center',
    // marginTop:20
  },
  view4: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    height: 225,
  },
  txt6: {
    marginTop: 7,
    color: '#1B1B1B',
    fontSize: 17,
    marginLeft: 17,
  },
});
