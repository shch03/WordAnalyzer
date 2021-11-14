'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
      this.state ={
        value: '',
        consonant: 0,
        vowel: 0,
        characters:0,
        colors: ['blue']
      }
  }

  WordAnalyzer = () => {
  	const listVowel=['a','i','u','e','o','A','I','U','E','O'];
 	  this.setState({
		  value: this.state.value,
      characters: this.state.value.length,
      consonant: this.state.value.length},
 	  () => {
 		  let arr_word= this.state.value.split('');
		  for(let j=0; j<arr_word.length; j++){
        for(let i=0; i<listVowel.length; i++){
          if(arr_word[j] == listVowel[i]){
            this.setState({
              vowel: this.state.vowel + 1,
              consonant: this.state.consonant - 1
            })
          } 
        }
      }
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Word Analyzer</Text>
        <TextInput style= {styles.input} onChangeText={(value) =>this.setState({value})} placeholder='Input a word here' />
        <Button color = '#841584' onPress={this.WordAnalyzer} title='Analyze'/>
        <Text>Word            :   {this.state.value}</Text>
        <Text>No of Consonants:   {this.state.consonant}</Text>
        <Text>No of Vowels    :   {this.state.vowel}</Text>
        <Text>No of Characters:   {this.state.characters}</Text>
      </View>     
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#F5FCFF',
  },
  header: {
    marginTop: 60,
    fontSize: 30,
    textAlign:'center',
    margin: 10,
  },
  contents:{
    textAlign: 'center',
    color: '#333333',
    marginBottom:5,
  },
  init:{
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding:10,
  }
});


