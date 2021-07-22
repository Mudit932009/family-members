import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class Sound extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      pressbuttonindex: '',
    };
  }

  Playsound = async (soundChunk) => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://s3-whitehatjrcontent.whjr.online/phones/' +
          soundChunk +
          '.mp3',
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          style={
            this.props.buttonindex === this.state.pressbuttonindex
              ? [styles.chunkButton, { backgroundColor: 'white' }]
              : [styles.chunkButton, { backgroundColor: 'red' }]
          }
          onPress={() => {
            this.setState({
              pressbuttonindex: this.props.buttonindex,
            });
            this.Playsound(this.props.soundChunk);
          }}>
          <Text
            style={
              this.props.buttonindex === this.state.pressbuttonindex
                ? [styles.displayText, { color: 'red' }]
                : [styles.displayText, { color: 'white' }]
            }>
            {this.props.wordChunk}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  displayText: { textAlign: 'center', fontSize: 30, color: 'white' },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  },
});
