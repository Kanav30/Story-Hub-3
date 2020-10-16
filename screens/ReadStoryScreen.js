import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
  render(){
  return (
    <View>
    <Header       
      backgroundColor={"#1F89DC"}
      centerComponent={{text:'Story Hub',style:{color:'white',fontSize:20}}}
       />
       <Text
       style={{textAlign: 'center', fontSize: 30}}
       >Read Story Here</Text>
    </View>
  );
  }

}

const styles = StyleSheet.create({
 
});
