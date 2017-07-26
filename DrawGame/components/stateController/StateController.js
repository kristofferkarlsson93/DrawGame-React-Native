/**
 * Created by Kristoffer on 2017-07-21.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types'
import PlayState from "../states/playState/PlayState";

export default class stateController extends React.Component {
    render() {
        if (true) {
            return (
                <View style={styles.container}>
                    <PlayState/>
                </View>
            );
        }else {
            return (
            <Text>Bajs</Text>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue",
    },
});
