import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Searchbar, Button, Menu } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MenuDrawer from 'react-native-side-drawer';
import UserScreen from './UserScreen';
import auth from '@react-native-firebase/auth'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        username:auth().currentUser.displayName,
        profileImage: auth().currentUser.photoURL,
    };
  }

  toggleClose = () => {
    this.setState({ open: this.state.open });
  };

  navigaetScreen = () => {
    this.props.navigation.navigate('UserScreen');
    // this.props.navigation.navigate('TabNavScreen')
    // console.log(this);
  };


  render() {
    // var {dName} = this.props.route.params
    return (
    //   <View>
        <TouchableOpacity onPress={()=>this.toggleClose} style={styles.animatedBox}>
       <Image
        style={styles.img5}
        source={{ uri: this.state.profileImage }}
        />
        <Text style={styles.txt9}>{this.state.username}</Text>
        <TouchableOpacity  onPress={()=>this.toggleClose}><AwesomeIcon style={styles.icon2}  name="times" color={'#202124'} size={30} /></TouchableOpacity>
        <TouchableOpacity style={styles.btn3}  onPress={ this.navigaetScreen }><Text style={styles.txt10}>View Profile</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn4}><Text style={styles.txt10}>Settings</Text></TouchableOpacity>
        <AwesomeIcon style={styles.icon3}  name="stop" color={'#E7A33F'} size={30} />
        <TouchableOpacity style={styles.btn5}><Text style={styles.txt10}>Try Premium For Free</Text></TouchableOpacity>
        <Text style={styles.txt11}>Pages You manage</Text>
        <Text style={styles.txt11}>Recent</Text>
        <Text></Text>
        <Text>#Branding</Text>
        <Text>#Startups</Text>
        <Text>#IJSE</Text>
        <TouchableOpacity style={styles.btn6}><Text style={styles.txt12}>Groups</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn6}><Text style={styles.txt12}>Events</Text></TouchableOpacity>
      </TouchableOpacity>
    //   </View>
    );
  }
}

const styles = StyleSheet.create({
    animatedBox: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 10,
        zIndex:100,
        // width:200,
        // height:300
      },
      container2:{
        // marginTop:-70
        zIndex:100
      },
      img5:{
        marginTop:70,
        marginLeft:3,
        width:50,
        height:50,
        borderRadius:100
      },
      txt9:{
        fontSize:19,
        color:'#202124',
        fontWeight:'bold',
        marginLeft:65,
        top:-50
      },
      icon2:{
        marginLeft:260,
        top:-50
      },
      txt10:{
        fontSize:16,
        color:'#0A66C2',
        fontWeight:'bold'
      },
      btn3:{
        left:40,
        top:-50
      },
      btn4:{
        left:160,
        top:-70
      },
      btn5:{
        left:40,
        top:-65
      },
      icon3:{
        top:-40
      },
      txt11:{
        fontSize:18,
        marginTop:10
      },
      btn6:{
        marginTop:10,
        // left:10,
      },
      txt12:{
        fontSize:20,
        color:'#0A66C2',
        // fontWeight:'bold'
      },
})