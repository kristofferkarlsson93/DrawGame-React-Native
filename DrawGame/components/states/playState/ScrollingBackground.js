/**
 * Created by Kristoffer on 2017-07-26.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types'


export default class ScrollingBackground extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameHeight: Dimensions.get('window').height,
            gameWidth: Dimensions.get('window').width,
            background1Top: 0,
            background2Top: -Dimensions.get('window').height
        }
    }

    static contextTypes = {
        loop: PropTypes.object,
    };

    update = () => {

        if(this.state.background1Top < this.state.gameHeight) {
            this.setState(previousState => {
                return { background1Top: this.state.background1Top + CONFIG.environmentSpeed }; //Yes!!!!
            });
        }else if (this.state.background1Top > this.state.gameHeight -2){ //tweak
            this.setState(previousState => {
                return { background1Top: -this.state.gameHeight }; //Yes!!!!
            });
        }
        if(this.state.background2Top < this.state.gameHeight) {
            this.setState(previousState => {
                return { background2Top: this.state.background2Top + CONFIG.environmentSpeed }; //Yes!!!!
            });
        }else if (this.state.background2Top > this.state.gameHeight-2) { //tweak
            this.setState(previousState => {
                return { background2Top: -this.state.gameHeight };
            });
        }

    };

    componentDidMount() {
        this.context.loop.subscribe(this.update)
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    image1Style = function () {
        return {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            resizeMode: 'stretch', // or 'stretch'
            marginTop: 0,
            position: 'absolute',
            top: this.state.background1Top,  //this one!!

        }
    };
    image2Style = function () {
        return {
            alignItems: 'center',
            justifyContent: 'center',
            //flex: 1,
            resizeMode: 'stretch', // or 'stretch'
            //marginTop: 0,
            //position: 'absolute',
            top: this.state.background2Top,  //this one!!

        }
    };


    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("./background.jpg")}
                    style={this.image1Style()} />
                <Image
                    source={require("./background.jpg")}
                    style={this.image2Style()} />


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

const CONFIG = {
    environmentSpeed: 10,
};
