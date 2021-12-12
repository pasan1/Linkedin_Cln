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
import {Searchbar, Button} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

export default class JobsScreen extends Component {
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
              <Text style={styles.txt1}>My Jobs</Text>
              <Text style={styles.txt2}>See all (0)</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.view2}>
            <Text style={styles.txt3}>Land your dream role</Text>
            <Image
              style={styles.img2}
              source={require('../../../assests/banner1.png')}
            />
            <Text style={styles.txt4}>
              Ge4t notified when new jobs match your preferd title and location
            </Text>
            <Button style={styles.btn1} onPress={() => console.log('Pressed')}>
              <Text style={styles.txt5}>Create Job Alert</Text>
            </Button>
          </View>

          <View style={styles.view3}>
            <Text style={styles.txt3}>Recomended for you</Text>

            <View>
              <Image
                style={styles.img3}
                source={require('../../../assests/microsoft.png')}
              />
              <Text style={styles.txt6}>DevOps Engineer</Text>
              <Text style={styles.txt7}>Microsoft Corporation</Text>
              <Text style={styles.txt8}>Washington, United States</Text>
              <Text style={styles.txt9}>
                3 weeks ago
                <Text style={styles.txt10}> 5 aplicants </Text>
                <Image
                  style={styles.img4}
                  source={require('../../../assests/linkedin.png')}
                />
                <Text> Easy Apply</Text>
              </Text>
              <AwesomeIcon
                style={styles.icon2}
                name="bookmark"
                color={'#666666'}
                size={20}
              />
            </View>
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
    color: '#1A1A1A',
    marginLeft: 15,
    marginTop: 13,
  },
  view1: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    height: 55,
  },
  txt2: {
    fontSize: 16,
    color: '#297ACA',
    marginLeft: 275,
    marginTop: -23,
  },
  view2: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    height: 270,
  },
  txt3: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 17,
    color: '#202124',
    fontWeight: 'bold',
  },
  img2: {
    marginTop: 10,
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
  txt4: {
    marginLeft: 19,
    marginRight: 10,
    marginTop: 20,
    fontSize: 15,
    color: '#202124',
  },
  btn1: {
    marginTop: 10,
    backgroundColor: '#0A66C2',
    width: 310,
    height: 40,
    alignSelf: 'center',
    borderRadius: 30,
  },
  txt5: {
    fontSize: 17,
    color: 'white',
  },
  view3: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    height: 270,
  },
  img3: {
    width: 50,
    height: 50,
    marginTop: 25,
    marginLeft: 10,
  },
  txt6: {
    marginLeft: 70,
    marginTop: -60,
    fontSize: 17,
    color: '#202124',
    fontWeight: 'bold',
  },
  txt7: {
    marginLeft: 70,
    // marginTop:-60,
    fontSize: 17,
    color: '#202124',
  },
  txt8: {
    marginLeft: 70,
    fontSize: 13,
  },
  img4: {
    width: 15,
    height: 15,
  },
  txt9: {
    marginLeft: 70,
    fontSize: 11,
  },
  txt10: {
    fontWeight: 'bold',
    color: '#188050',
  },
  icon2: {
    marginLeft: 335,
    marginTop: -80,
  },
});
