/**
 * Created by Kristoffer on 2017-07-21.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types'
import { World } from 'react-game-kit/native';


import ScrollingBackground from './ScrollingBackground';
import Player from './Player';

export default class PlayState extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        }
    }

    static contextTypes = {
        loop: PropTypes.object,

    };

    update() {

    }

    componentDidMount() {
        this.context.loop.subscribe(this.update)
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    render() {
        return (
            <World>
                <ScrollingBackground>
                </ScrollingBackground>
                <Player />
            </World>

        );
    }
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        paddingTop: 0,
        flex: 1,

    },
});


