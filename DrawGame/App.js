import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Loop, Stage, } from 'react-game-kit/native';

import StateController from "./components/stateController/StateController";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <Loop>
            <Stage
            width={Dimensions.get('window').width}
            height={Dimensions.get('window').height}>
                <StateController style={styles.container}/>
            </Stage>
        </Loop>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
