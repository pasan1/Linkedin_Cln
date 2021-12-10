import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Searchbar, Button, Menu } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth'

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery:'',
      username:auth().currentUser.displayName,
      profileImage: auth().currentUser.photoURL,
    };
  }
  
  onChangeSearch(query) {
    setSearchQuery(query);
}


  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.view1}>
          <TouchableOpacity onPress={(props) => { this.props.navigation.goBack(null) }}>
        <AwesomeIcon style={styles.icon2}  name="arrow-left" color={'#666666'} size={30} />
        </TouchableOpacity>
        <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={this.onChangeSearch}
        value={this.state.searchQuery}
        />
        <AwesomeIcon style={styles.icon1}  name="cog" color={'#666666'} size={30} />
        </View>
        <Image
        style={styles.img1}
        source={require('../../../assests/cover.jpg')}
        />
       
        <TouchableOpacity ><View style={styles.btn1}><AwesomeIcon style={styles.icon3}  name="pen" color={'#0A66C2'} size={22} /></View></TouchableOpacity>
       
        <Image
        style={styles.img2}
        source={{ uri: this.state.profileImage }}
        />
        <TouchableOpacity ><View style={styles.btn2}><AwesomeIcon style={styles.icon3}  name="plus" color={'#0A66C2'} size={22} /></View></TouchableOpacity>
       
        <Text style={styles.txt1}>{this.state.username} </Text>
        <Text style={styles.txt2}>Software Engineer</Text>
        <Text style={styles.txt3}>Microsoft Corporation</Text>
        <Text style={styles.txt4}>Washington, United States</Text>
        <Text style={styles.txt5}>500 Connections</Text>

        <TouchableOpacity style={styles.btn3}><Text style={styles.txt6}>Open To</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn4}><Text style={styles.txt7}>Add Section</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn5}><AwesomeIcon style={styles.icon4}  name="ellipsis-h" color={'#666666'} size={20} /></TouchableOpacity>
        
        <View style={styles.view2}>
          <Text style={styles.txt8}>Open to work</Text>
          <Text style={styles.txt9}>Software Engineer</Text>
          <AwesomeIcon style={styles.icon5}  name="pen" color={'#5D5C59'} size={16} />
          <TouchableOpacity><Text style={styles.txt10}>See all details</Text></TouchableOpacity>
        </View>

        <View style={styles.view3}>
          <Text style={styles.txt11}>Analytics</Text>
          <AwesomeIcon style={styles.icon6}  name="eye" color={'#5D5C59'} size={16} />
          <Text style={styles.txt12}>Private to you</Text>
          <AwesomeIcon style={styles.icon7}  name="user-friends" color={'#5D5C59'} size={30} />
          <Text style={styles.txt13}>24 Profile views</Text>
          <Text style={styles.txt14}>Discover Who's viwed your profile.</Text>
          <AwesomeIcon style={styles.icon7}  name="chart-bar" color={'#5D5C59'} size={30} />
          <Text style={styles.txt13}>163 post views</Text>
          <Text style={styles.txt14}>Checkout who's engaging with your posts.</Text>
          <AwesomeIcon style={styles.icon7}  name="search" color={'#5D5C59'} size={30} />
          <Text style={styles.txt13}>7 search appearences</Text>
          <Text style={styles.txt14}>See how often you appear in search results.</Text>
        </View>

        <View style={styles.view4}>
          <Text style={styles.txt11}>Resources</Text>
          <AwesomeIcon style={styles.icon6}  name="eye" color={'#5D5C59'} size={16} />
          <Text style={styles.txt12}>Private to you</Text>
          <AwesomeIcon style={styles.icon7}  name="satellite-dish" color={'#5D5C59'} size={30} />
          <Text style={styles.txt13}>Creator Mode</Text>
          <Text style={styles.txt14}>Discover Who's viwed your profile.</Text>
          <AwesomeIcon style={styles.icon7} name="user-friends" color={'#5D5C59'} size={30} />
          <Text style={styles.txt13}>My network</Text>
          <Text style={styles.txt14}>See and manage your connections</Text>
        </View>

        <View style={styles.view5}>
          <Text style={styles.txt11}>About</Text>
          <AwesomeIcon style={styles.icon8}  name="pen" color={'#5D5C59'} size={16} />
          <Text style={styles.txt15}>Private to you</Text>
        </View>

        <View style={styles.view5}>
          <Text style={styles.txt11}>Activity</Text>
          <Text style={styles.txt16}>500 Connections</Text>
          <TouchableOpacity style={styles.btn6}><Text style={styles.txt17}>Start a post</Text></TouchableOpacity>
        </View>

        <View style={styles.view6}>
          <Text style={styles.txt11}>Experince</Text>
          <AwesomeIcon style={styles.icon8}  name="pen" color={'#5D5C59'} size={16} />
          <AwesomeIcon style={styles.icon9}  name="plus" color={'#5D5C59'} size={16} />
          <Image
          style={styles.img3}
          source={require('../../../assests/microsoft.png')}
          />
           <Text style={styles.txt18}>Microsoft Corporation</Text>
           <Text style={styles.txt14}>Full-time - 2 yrs</Text>
        </View>

        <View style={styles.view5}>
          <Text style={styles.txt11}>License  &  Certification</Text>
          <AwesomeIcon style={styles.icon8}  name="pen" color={'#5D5C59'} size={16} />
          <AwesomeIcon style={styles.icon9}  name="plus" color={'#5D5C59'} size={16} />
        </View>

        <View style={styles.view7}>
          <Text style={styles.txt11}>Skills</Text>
          <AwesomeIcon style={styles.icon8}  name="pen" color={'#5D5C59'} size={16} />
          <AwesomeIcon style={styles.icon9}  name="plus" color={'#5D5C59'} size={16} />
          <Text style={styles.txt19}>Software Engineering</Text>
          <Text style={styles.txt19}>Web Developing</Text>
          <Text style={styles.txt19}>Mobile App Developing</Text>
        </View>

        <View style={styles.view5}>
          <Text style={styles.txt11}>Courses</Text>
          <AwesomeIcon style={styles.icon8}  name="pen" color={'#5D5C59'} size={16} />
          <AwesomeIcon style={styles.icon9}  name="plus" color={'#5D5C59'} size={16} />
        </View>

        <View style={styles.view5}>
          <Text style={styles.txt11}>Languages</Text>
          <AwesomeIcon style={styles.icon8}  name="pen" color={'#5D5C59'} size={16} />
          <AwesomeIcon style={styles.icon9}  name="plus" color={'#5D5C59'} size={16} />
        </View>


        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    color:'#FEFEFE',
  },
      searchbar:{
        width:250,
        marginLeft:55,
        marginTop:-40
    },
    icon1:{
       marginLeft:321,
       marginTop:-40
    },
    icon2:{
      marginLeft:10,
      marginTop:20
   },
   view1:{
     height:70
   },
   img1:{
    marginTop:10,
    marginLeft:10,
    width:340,
    height:140
},
btn1:{
  backgroundColor:'white',
  width:35,
  height:35,
  borderRadius:100,
  marginLeft:307,
  marginTop:-130,
  
},
icon3:{
  marginTop:5,
  alignSelf:'center'
},
img2:{
  width:130,
  height:130,
  marginLeft:20,
  marginTop:-60,
  borderColor:'white',
  borderRadius:100,
  borderWidth:3
},
btn2:{
  backgroundColor:'white',
  width:35,
  height:35,
  borderRadius:100,
  marginLeft:110,
  marginTop:-40,
  
},
txt1:{
  color:'#202124',
  fontWeight:'bold',
  fontSize:25,
  marginTop:20,
  marginLeft:15
},
txt2:{
  color:'#202124',
  fontSize:18,
  marginLeft:15
},
txt3:{
  marginTop:20,
  color:'#202124',
  fontSize:18,
  marginLeft:15
},
txt4:{
  fontSize:15,
  marginLeft:15
},
txt5:{
  marginTop:20,
  fontSize:15,
  marginLeft:15,
  color:'#0A66C2',
  fontWeight:'bold'
},
btn3:{
  marginLeft:10,
  marginTop:10,
  backgroundColor:'#0A66C2',
  width:140,
  height:43,
  borderRadius:40
},
txt6:{
  fontSize:20,
  alignSelf:'center',
  color:'white',
  fontWeight:'bold',
  marginTop:7
},
btn4:{
  marginTop:-40,
  borderColor:'#293138',
  borderWidth:2,
  width:140,
  height:43,
  borderRadius:40,
  marginLeft:160,
},
txt7:{
  fontSize:20,
  alignSelf:'center',
  color:'#293138',
  fontWeight:'bold',
  marginTop:7,
},
btn5:{
  borderColor:'#293138',
  borderWidth:2,
  width:40,
  height:43,
  borderRadius:40,
  left:310,
  top:-43
},
icon4:{
  alignSelf:'center',
  marginTop:7
},
view2:{
  width:330,
  height:85,
  backgroundColor:'#E9E5DF',
  borderRadius:11,
  alignSelf:'center'
  // marginLeft:30
},
txt8:{
  color:'#202124',
  fontWeight:'bold',
  fontSize:16,
  marginLeft:10,
  marginTop:8
},
txt9:{
  color:'#202124',
  marginLeft:10,
  fontSize:15,
},
icon5:{
  marginLeft:300,
  marginTop:-33
},
txt10:{
  color:'#0A66C2',
  fontWeight:'bold',
  marginTop:20,
  marginLeft:10,
  fontSize:15
},
txt11:{
  color:'#202124',
  fontWeight:'bold',
  fontSize:20,
  marginLeft:10,
},
view3:{
  marginTop:20,
  height:235,
  backgroundColor:'#E9E5DF',
},
view4:{
  marginTop:20,
  height:175,
  backgroundColor:'#E9E5DF',
},
view5:{
  marginTop:20,
  height:80,
  backgroundColor:'#E9E5DF',
},
view6:{
  marginTop:20,
  height:120,
  backgroundColor:'#E9E5DF',
},
view7:{
  marginTop:20,
  height:140,
  backgroundColor:'#E9E5DF',
},
icon6:{
  marginLeft:10,
  marginTop:5
},
txt12:{
  marginLeft:35,
  marginTop:-18,
  fontSize:14
},
icon7:{
  marginTop:15,
  marginLeft:10
},
txt13:{
  color:'#202124',
  fontWeight:'bold',
  fontSize:15,
  marginLeft:60,
  marginTop:-34,
},
txt14:{
  marginLeft:60
},
txt15:{
  marginLeft:10,
  marginTop:10
},
icon8:{
  marginTop:-15,
  marginLeft:330
},
icon9:{
  marginTop:-15,
  marginLeft:300
},
txt16:{
  marginTop:10,
  fontSize:15,
  marginLeft:10,
  color:'#0A66C2',
  fontWeight:'bold'
},
btn6:{
  borderColor:'#0A66C2',
  borderWidth:2,
  borderRadius:25,
  width:100,
  height:30,
  marginLeft:245,
  marginTop:-45
},
txt17:{
  color:'#0A66C2',
  alignSelf:'center',
  marginTop:3
},
img3:{
  width:50,
  height:50,
  marginTop:10,
  marginLeft:10
},
txt18:{
  color:'#202124',
  fontWeight:'bold',
  fontSize:15,
  marginLeft:60,
  marginTop:-48,
},
txt19:{
  color:'#202124',
  fontWeight:'bold',
  fontSize:15,
  marginLeft:20,
  marginTop:10,
},


  });
