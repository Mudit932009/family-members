import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Database from './database';
import Sound from './components/sound';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mtext: '',

      chunkarray: [],

      phonearray: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./monkey2.jfif')}
          style={styles.imageIcon}></Image>
        <TextInput
          placeholder="hi i am Mudit"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              mtext: text,
            });
          }}></TextInput>
        <Text>{this.state.mtext}</Text>
        <TouchableOpacity
          onPress={() => {
            var word = this.state.mtext.toLowerCase();
            Database[word]
              ? this.setState({
                  chunkarray: Database[this.state.mtext].chunks,
                  phonearray: Database[this.state.mtext].phones,
                })
              : alert('The word does not exist');
          }}
          style={styles.goButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        ,
        <View>
          {this.state.chunkarray.map((item, index) => {
            return (
              <Sound
                wordChunk={this.state.chunkarray[index]}
                buttonIndex={index}
                soundChunk={this.state.phonearray[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#b8b8b8' },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },

  imageIcon: { width: 150, height: 150, marginLeft: 95 },
});
