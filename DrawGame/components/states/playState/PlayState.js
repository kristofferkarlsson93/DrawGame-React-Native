/**
 * Created by Kristoffer on 2017-07-21.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types'





export default class PlayState extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        }
    }

    static contextTypes = {
        loop: PropTypes.object,
        gameHeight: Dimensions.get('window').height,
        gameWidth: Dimensions.get('window').width
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
        return (<Background>

            </Background>

        );
    }
}


class Background extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            background1Top: 0,
            background2Top: 0,
        }
    }

    static contextTypes = {
        loop: PropTypes.object,
    };
    update = () => {

        this.setState(previousState => {
            return { background1Top: this.state.background1Top + 1 }; //Yes!!!!
        });


    };

    componentDidMount() {
        this.context.loop.subscribe(this.update)
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    testFunction = function () {
        return {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            resizeMode: 'stretch', // or 'stretch'
            marginTop: 0,
            top: this.state.background1Top,  //this one!!

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("./background.jpg")}
                    style={this.testFunction()}/>

            </View>

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
        backgroundColor: 'green',
    },
    backgroundImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        marginTop: 0,
        top: 0,  //this one!!


    }
});
