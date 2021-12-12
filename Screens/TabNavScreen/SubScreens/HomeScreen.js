import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import {Searchbar, Button, Menu} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MenuDrawer from 'react-native-side-drawer';
import UserScreen from './UserScreen';
import Sidebar from './Sidebar';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      open: false,
      isLoading: true,
      refreshing: false,
      username: auth().currentUser.displayName,
      profileImage: auth().currentUser.photoURL,
      // datas:[]
    };
    // this.getPostsToFeed()
  }

  componentDidMount = () => {
    this.scrollToTopAndRefresh = this.scrollToTopAndRefresh.bind(this);
    this.doRefresh = this.doRefresh.bind(this);
    this.getPostsToFeed();
  };

  scrollToTopAndRefresh() {
    console.log('dsds');
    this.flatlistref.scrollToOffset({y: 0, animated: true});
    this.setState({refreshing: true}, this.doRefresh);
  }

  doRefresh() {
    console.log('dsds');
    this.getPostsToFeed();
    setTimeout(() => this.setState({refreshing: false}), 100);
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open});
  };
  toggleClose = () => {
    this.setState({open: this.state.open});
  };

  onChangeSearch(query) {
    setSearchQuery(query);
  }

  getListViewItem = item => {
    Alert.alert(item.key);
  };

  getPostsToFeed = async () => {
    const datas = [];
    firestore()
      .collection('Posts')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          console.log(documentSnapshot.data());

          const DatasObject = documentSnapshot.data();
          datas.push({
            caption: DatasObject.caption,
            fileURL: DatasObject.fileURL,
            userProfilURL: DatasObject.userProfilURL,
            userName: DatasObject.userName,
          });
          console.log(datas);
        });
        this.setState({
          isLoading: false,
          postData: datas,
        });
      });
  };

  flatlistref = null;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MenuDrawer
          style={styles.container2}
          open={this.state.open}
          drawerContent={
            <Sidebar
              navigation={this.props.navigation}
              data={this.state.username}
            />
          }
          drawerPercentage={88}
          animationTime={250}
          overlay={true}
          opacity={0.4}

          // close ={!this.state.open}
        >
          <TouchableOpacity onPress={this.toggleOpen}>
            <Image
              style={styles.img1}
              source={{uri: this.state.profileImage}}
            />
          </TouchableOpacity>
        </MenuDrawer>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={this.onChangeSearch}
          value={this.state.searchQuery}
        />
        <TouchableOpacity onPress={() => this.toggleClose}>
          <AwesomeIcon
            style={styles.icon1}
            name="comment-dots"
            color={'#666666'}
            size={30}
          />
        </TouchableOpacity>
        <ScrollView nestedScrollEnabled={true}>
          {/* <View style={styles.view1}>
          <Text style={styles.txt1}>Land your dream role</Text>
          <Image
          style={styles.img2}
          source={require('../../../assests/banner1.png')}
          />
          <Text style={styles.txt2}>Ge4t notified when new jobs match your preferd title and location</Text>
          <Button style={styles.btn1}   
          onPress={this.getPostsToFeed}
          >
            <Text style={styles.txt3}>Create Job Alert</Text>
          </Button>
          </View> */}

          <FlatList
            ref={ref => (this.flatlistref = ref)}
            data={this.state.postData}
            renderItem={({item}) => (
              <View>
                <View style={styles.view6}>
                  <Image
                    style={styles.img3}
                    source={{uri: item.userProfilURL}}
                  />

                  <View style={styles.view2}>
                    <Text style={styles.txt4}>{item.userName} </Text>
                    <Text style={styles.txt5}>63 Followers</Text>
                    <Text style={styles.txt5}>
                      {item.creation} . Edited .{' '}
                      <AwesomeIcon
                        style={styles.icon1}
                        name="globe-americas"
                        size={12}
                      />
                    </Text>
                  </View>

                  <TouchableOpacity>
                    <Text style={styles.txt6}>+ Follow</Text>
                  </TouchableOpacity>

                  <Text style={styles.txt7}>
                    {item.caption}...<Text style={styles.txt5}>see more</Text>
                  </Text>

                  <Image style={styles.img4} source={{uri: item.fileURL}} />

                  <View style={styles.view3}>
                    <Text>
                      <AwesomeIcon
                        style={styles.icon1}
                        color={'#368EE9'}
                        name="thumbs-up"
                        size={14}
                      />{' '}
                      <AwesomeIcon
                        style={styles.icon1}
                        color={'#D96D49'}
                        name="heart"
                        size={14}
                      />{' '}
                      <AwesomeIcon
                        style={styles.icon1}
                        color={'#70AF50'}
                        name="sign-language"
                        size={14}
                      />{' '}
                      26
                    </Text>
                  </View>
                  <Text style={styles.txt8}>2 comments</Text>

                  <View style={styles.view4}>
                    <Text>
                      <AwesomeIcon
                        style={styles.icon1}
                        color={'#666666'}
                        name="thumbs-up"
                        size={19}
                      />{' '}
                      <AwesomeIcon
                        style={styles.icon1}
                        color={'#666666'}
                        name="comment-dots"
                        size={19}
                      />{' '}
                      <AwesomeIcon
                        style={styles.icon1}
                        color={'#666666'}
                        name="share"
                        size={19}
                      />{' '}
                      <AwesomeIcon
                        style={styles.icon1}
                        color={'#666666'}
                        name="paper-plane"
                        size={19}
                      />
                    </Text>
                  </View>

                  <View style={styles.view5}>
                    <Text>
                      <Text>Like</Text> <Text>Comment</Text> <Text>share</Text>{' '}
                      <Text>send</Text>
                    </Text>
                  </View>
                </View>
              </View>
            )}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.doRefresh();
                }}
              />
            }
            keyExtractor={(item, index) => index.toString()}
          />
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
    // marginTop: 70,

    // paddingTop: StatusBar.currentHeight,
  },
  view1: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    height: 270,
  },
  img1: {
    marginTop: 10,
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  searchbar: {
    // position:'absolute',
    width: 250,
    marginLeft: 60,
    marginTop: 10,
    zIndex: -100,
    // backgroundColor:'transparent'
  },
  icon1: {
    marginLeft: 323,
    marginTop: -40,
  },
  txt1: {
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
  txt2: {
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
  txt3: {
    fontSize: 17,
    color: 'white',
  },
  txt4: {
    fontSize: 15,
    color: '#202124',
    fontWeight: 'bold',
  },
  txt5: {
    fontSize: 12,
  },
  view2: {
    marginLeft: 73,
    marginTop: -52,
  },
  img3: {
    marginTop: 10,
    marginLeft: 15,
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  txt6: {
    fontSize: 16,
    color: '#0A66C2',
    fontWeight: 'bold',
    marginLeft: 280,
    marginTop: -40,
  },
  txt7: {
    color: '#202124',
    marginLeft: 15,
    marginTop: 10,
  },
  img4: {
    width: 330,
    height: 330,
    marginTop: 15,
    alignSelf: 'center',
  },
  view3: {
    marginLeft: 16,
    marginTop: 8,
  },
  txt8: {
    marginLeft: 265,
    marginTop: -18,
  },
  view4: {
    marginTop: 18,
    marginLeft: 46,
  },
  view5: {
    marginLeft: 43,
  },
  view6: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    height: 550,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    zIndex: 100,
    // width:200,
    // height:300
  },
  container2: {
    // marginTop:-70
    zIndex: 100,
  },
  img5: {
    marginTop: 70,
    marginLeft: 3,
    width: 50,
    height: 50,
  },
  txt9: {
    fontSize: 19,
    color: '#202124',
    fontWeight: 'bold',
    marginLeft: 65,
    top: -50,
  },
  icon2: {
    marginLeft: 260,
    top: -50,
  },
  txt10: {
    fontSize: 16,
    color: '#0A66C2',
    fontWeight: 'bold',
  },
  btn3: {
    left: 40,
    top: -50,
  },
  btn4: {
    left: 160,
    top: -70,
  },
  btn5: {
    left: 40,
    top: -65,
  },
  icon3: {
    top: -40,
  },
  txt11: {
    fontSize: 18,
    marginTop: 10,
  },
  btn6: {
    marginTop: 10,
    // left:10,
  },
  txt12: {
    fontSize: 20,
    color: '#0A66C2',
    // fontWeight:'bold'
  },
});
