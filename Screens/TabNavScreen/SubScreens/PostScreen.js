import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import TabNavScreen from '../TabNavScreen';
import AwesomeAlert from 'react-native-awesome-alerts';
import auth from '@react-native-firebase/auth'

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      open: false,
      value: null,
      items: [{label: 'Admin', value: 'Admin'},{label: 'User', value: 'User'}],
      // imagePath: '',
      // ImageName: '',
      fileURL: '',
      profileImage: auth().currentUser.photoURL,
    };
    this.setValue = this.setValue.bind(this);
  }

  setOpen=(open)=> {
    this.setState({
      open
    });
  }

  setValue=(callback)=> {
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems=(callback)=> {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  getImageFromGalery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      this.setState({
        imagePath: image.path,
        imageName: image.modificationDate
      })
    });
  }

  getVideoFromGalery = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      console.log(video);
      this.setState({
        videoPath: video.path,
        videoName: video.modificationDate
      })
    });
  }

  saveRecordInFireStore = (url) => {
    console.log("Pasindu");
    firestore()
      .collection('Posts')
      .add({
        userID: this.props.route.params.uid,
        userProfilURL:this.props.route.params.userImage,
        userName:this.props.route.params.displayName,
        caption: this.state.caption,
        fileURL: url,
        creation: firestore.FieldValue.serverTimestamp(),
      }).then(docRef => {
        // this.props.navigation.navigate('TabNavScreen', {docId: docRef.id})
        console.log("Document written with ID: ", docRef.id);
        console.log("You can now also access this. as expected: ", this.foo)
    })
    .catch(error => console.error("Error adding document: ", error))

  }

  uploadImage = async () => {
    // create bucket storage reference to not yet existing image


    console.log(this.state.imagePath);
    console.log(this.state.imageName);
    console.log(this.state.videoPath);
    console.log(this.state.videoName);



    if (this.state.imagePath == undefined) {
      const reference = storage().ref(`postVideos/${this.state.videoName}`);
      await reference.putFile(this.state.videoPath);
      console.log(this.state.videoName);
      const videoUrl = await storage().ref(`postVideos/${this.state.videoName}`).getDownloadURL();
      console.log(videoUrl);
      this.setState = ({
        fileURL: videoUrl,
      })
      this.saveRecordInFireStore(videoUrl);
      // this.props.navigation.navigate('TabNavScreen')

    } else {
      const reference = storage().ref(`postImages/${this.state.imageName}`);
      await reference.putFile(this.state.imagePath);
      const imageUrl = await storage().ref(`postImages/${this.state.imageName}`).getDownloadURL();
      console.log(imageUrl);
      this.setState = ({
        fileURL: imageUrl,
      })
      this.saveRecordInFireStore(imageUrl);
      this.clear();
      this.props.navigation.navigate('Home', { screen: 'Home' });
      

    }



  }

  clear = () =>{
    this.setState = ({
      caption: '',
      imagePath: '',
      fileURL: '',
    });
  }

  forceUpdateHandler = ()=>{
    this.forceUpdate();
  }

  render() {
    
    const { open, value, items } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>

        <View style={styles.view1}>
          <TouchableOpacity>
        <AwesomeIcon style={styles.icon1} color={'#666666'} name="times"  size={35} />
        </TouchableOpacity>
        <Text style={styles.txt1}>Share post</Text>
        <TouchableOpacity style={styles.btn1} onPress={this.uploadImage}><Text style={styles.txt2}>Post</Text></TouchableOpacity>
        
        </View>

        <View>
        <Image
        style={styles.img1}
        source={{ uri: this.state.profileImage }}
        />
        
         <DropDownPicker   style={styles.dropdown} 
        open={open}
        value={value}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
        
      />
       <DropDownPicker   style={styles.dropdown2} 
        open={open}
        value={value}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
      />
        </View>

        

        <View>
        <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}

        onChangeText={(text) => this.setState({ caption: text })}
         value={this.state.text}
        placeholder="What do you want to talk about?"
        keyboardType="default"
      />

       <Image
          style={styles.postImage}
          source={{ uri: this.state.imagePath }}
          
        />
       
        </View>

        <View style={styles.view2}>
          <TouchableOpacity style={styles.btn2} onPress={this.getImageFromGalery}><AwesomeIcon style={styles.icon1} color={'#666666'} name="image"  size={25} /><Text style={styles.txt3}>Add a Photo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={this.getVideoFromGalery}><AwesomeIcon style={styles.icon1} color={'#666666'} name="video"  size={25} /><Text style={styles.txt3}>Take A video</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="glass-cheers"  size={25} /><Text style={styles.txt3}>Celebrate an occasion</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="file-alt"  size={25} /><Text style={styles.txt3}>Add a Document</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="briefcase"  size={25} /><Text style={styles.txt3}>Share that you're hiring</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="user-tie"  size={25} /><Text style={styles.txt3}>Find an expert</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="chart-bar"  size={25} /><Text style={styles.txt3}>Create a poll</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.icon1} color={'#666666'} name="calendar-alt"  size={25} /><Text style={styles.txt3}>Create an event</Text></TouchableOpacity>
        </View>

        {/* <AwesomeAlert
          show={this.hideAlert}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        /> */}

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E9E5DF',
    color:'#FEFEFE',
    // paddingTop: StatusBar.currentHeight,
  },
  view1:{
    backgroundColor:'#FFFFFF',
    height:58
  },
  txt1:{
    color:'#202124',
    marginLeft:45,
    marginTop:-32,
    fontSize:22,
    fontWeight:'bold'
  },
  icon1:{
    marginLeft:10,
    marginTop:10
  },
  btn1:{
    
    marginLeft:310,
    marginTop:-25,
  },
  txt2:{
    fontSize:15,
    color:'#0A66C2',
    fontWeight:'bold'
  },
  img1:{
    marginTop:14,
    marginLeft:15,
    width:48,
    height:48,
    borderRadius:100
},
dropdown:{
  width:200,
  height:30,
  marginLeft:70,
  marginTop:-44
},
dropdown2:{
  width:150,
  height:30,
  marginLeft:70,
  marginTop:-4
},
input:{
  marginLeft:16
},
txt3:{
  fontSize:16,
  color:'#202124',
  marginLeft:45,
  marginTop:-23
},
btn2:{
  marginTop:9,
  marginLeft:8
},
view2:{
  marginTop:30,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  backgroundColor:'#FFFFFF',
  height:370
},
postImage: {
  height: 300,
  width: 360
}
})