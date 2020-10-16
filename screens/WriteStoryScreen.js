import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state = {
    title: '',
    author: '',
    story: ''
    }
  }  

  Transaction = async()=>{
    var transactionMessage = 'Story Submitted'
    ToastAndroid.show(transactionMessage, ToastAndroid.SHORT)
  }



  SubmitStory = async()=>{
    db.collection('Stories').add({
      'Title': this.state.title,
      'Author': this.state.author,
      'Story': this.state.story
    })
  }
   render(){
  return (
    <KeyboardAvoidingView behavior = "padding" enabled>
    <View>
     <Header       
      backgroundColor={"#1F89DC"}
      centerComponent={{text:'Story Hub',style:{color:'white',fontSize:20}}}
       />

       <TextInput
       style =  {styles.textInput}
       placeholder="Title"
       value = {this.state.title}
       onChangeText={text =>{this.setState({title: text})}}
       />
       <TextInput
       style =  {styles.textInput1}
       placeholder="Author"
       value = {this.state.author}
       onChangeText={text =>{this.setState({author: text})}}
       />
       <TextInput
       style =  {styles.textInput2}
       placeholder="Write Story Here"
       multiline =  {true}
       value = {this.state.story}
       onChangeText={text =>{this.setState({story: text})}}
       />
       <TouchableOpacity
        style={styles.button}
        onPress={async()=>{
          this.SubmitStory()
          this.Transaction()
          this.setState({
            title: '',
            author: '',
            story: ''
          })
        }}
       >
      
         <Text
         style={{color: '#ffffff', fontSize: 30, textAlign: 'center'}}
         >Submit</Text>
       </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
  }

}

const styles = StyleSheet.create({
 textInput:{
    borderWidth : 3,
    fontSize : 30,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 20,
    width: 130
 },
 textInput1:{
  borderWidth : 3,
  fontSize : 30,
  alignSelf: 'center',
  textAlign: 'center',
  width: 320,
  margin: 20
},
textInput2:{
  borderWidth : 3,
  fontSize : 20,
  width: 350,
  margin: 20,
  height: 300,
  alignSelf: 'center'
},
button:{
  backgroundColor : '#3f2a4b',
  height: 40,
  width: 150,
  alignSelf: 'center'
}
});
