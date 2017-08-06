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
            obstacle1Y: -100,
            obstacle1X: this.randomNumber(),

            obstacle2Y: -100,
            obstacle2X: this.randomNumber(),

            obstacle3Y: -100,
            obstacle3X: this.randomNumber(),

            obstacle4Y: -300,
            obstacle4X: this.randomNumber(),

            obstacle5Y: -300,
            obstacle5X: this.randomNumber(),

            obstacle6Y: -300,
            obstacle6X: this.randomNumber(),

            obstacle7Y: -600,
            obstacle7X: this.randomNumber(),

            obstacle8Y: -600,
            obstacle8X: this.randomNumber(),

            obstacle9Y: -600,
            obstacle9X: this.randomNumber(),

            obstacle10Y: -900,
            obstacle10X: this.randomNumber(),

            obstacle11Y: -900,
            obstacle11X: this.randomNumber(),

            obstacle12Y: -900,
            obstacle12X: this.randomNumber(),

            allPositions: []


        }
        console.log(this.randomNumber());
    }

    randomNumber() {
        return Math.floor((Math.random() * CONFIG.gameWidth-50) + 1) + 20;
    }

    static contextTypes = {
        loop: PropTypes.object,
    };

    update = () => {
        var newList = [];
        this.setState({
            obstacle1Y: this.state.obstacle1Y + CONFIG.environmentSpeed,
            obstacle2Y: this.state.obstacle2Y+ CONFIG.environmentSpeed,
            obstacle3Y: this.state.obstacle3Y+ CONFIG.environmentSpeed,
            obstacle4Y: this.state.obstacle4Y+ CONFIG.environmentSpeed,
            obstacle5Y: this.state.obstacle5Y+ CONFIG.environmentSpeed,
            obstacle6Y: this.state.obstacle6Y+ CONFIG.environmentSpeed,
            obstacle7Y: this.state.obstacle7Y+ CONFIG.environmentSpeed,
            obstacle8Y: this.state.obstacle8Y+ CONFIG.environmentSpeed,
            obstacle9Y: this.state.obstacle9Y+ CONFIG.environmentSpeed,
            obstacle10Y: this.state.obstacle10Y+ CONFIG.environmentSpeed,
            obstacle11Y: this.state.obstacle11Y+ CONFIG.environmentSpeed,
            obstacle12Y: this.state.obstacle12Y+ CONFIG.environmentSpeed,
            allPositions: []
        });

        prelList = {posY: this.state.obstacle1Y, posX: this.state.obstacle1X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle2Y, posX: this.state.obstacle2X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle3Y, posX: this.state.obstacle3X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle4Y, posX: this.state.obstacle4X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle5Y, posX: this.state.obstacle5X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle6Y, posX: this.state.obstacle6X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle7Y, posX: this.state.obstacle7X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle8Y, posX: this.state.obstacle8X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle9Y, posX: this.state.obstacle9X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle10Y, posX: this.state.obstacle10X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle11Y, posX: this.state.obstacle11X}
        newList.push(prelList);
        prelList = {posY: this.state.obstacle12Y, posX: this.state.obstacle12X}
        newList.push(prelList);
        this.setState({allPositions: newList});


        var prelList = {};
        if(this.state.obstacle1Y > CONFIG.gameHeight) {
            this.setState( {obstacle1Y: -100, obstacle1X: this.randomNumber()});
        }
        if(this.state.obstacle2Y > CONFIG.gameHeight) {
            this.setState( {obstacle2Y: -100, obstacle2X: this.randomNumber()});
        }
        if(this.state.obstacle3Y > CONFIG.gameHeight) {
            this.setState( {obstacle3Y: -100, obstacle3X: this.randomNumber()});
        }
        if(this.state.obstacle4Y > CONFIG.gameHeight) {
            this.setState( {obstacle4Y: -100, obstacle4X: this.randomNumber()});
        }
        if(this.state.obstacle5Y > CONFIG.gameHeight) {
            this.setState( {obstacle5Y: -100, obstacle5X: this.randomNumber()});
        }
        if(this.state.obstacle6Y > CONFIG.gameHeight) {
            this.setState( {obstacle6Y: -100, obstacle6X: this.randomNumber()});
        }
        if(this.state.obstacle7Y > CONFIG.gameHeight) {
            this.setState( {obstacle7Y: -100, obstacle7X: this.randomNumber()});
        }
        if(this.state.obstacle8Y > CONFIG.gameHeight) {
            this.setState( {obstacle8Y: -100, obstacle8X: this.randomNumber()});
        }
        if(this.state.obstacle9Y > CONFIG.gameHeight) {
            this.setState( {obstacle9Y: -100, obstacle9X: this.randomNumber()});
        }
        if(this.state.obstacle10Y > CONFIG.gameHeight) {
            this.setState( {obstacle10Y: -100, obstacle10X: this.randomNumber()});
        }
        if(this.state.obstacle11Y > CONFIG.gameHeight) {
            this.setState( {obstacle11Y: -100, obstacle11X: this.randomNumber()});
        }
        if(this.state.obstacle12Y > CONFIG.gameHeight) {
            this.setState( {obstacle12Y: -100, obstacle12X: this.randomNumber()});
        }

    }

    componentDidMount() {
        this.context.loop.subscribe(this.update)
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    obstacle1Style() {
        return {
            top: this.state.obstacle1Y,
            position: 'absolute',
            left: this.state.obstacle1X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }

    obstacle2Style() {
        return {
            top: this.state.obstacle2Y,
            position: 'absolute',
            left: this.state.obstacle2X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle3Style() {
        return {
            top: this.state.obstacle3Y,
            position: 'absolute',
            left: this.state.obstacle3X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle4Style() {
        return {
            top: this.state.obstacle4Y,
            position: 'absolute',
            left: this.state.obstacle4X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }obstacle5Style() {
        return {
            top: this.state.obstacle5Y,
            position: 'absolute',
            left: this.state.obstacle5X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }obstacle6Style() {
        return {
            top: this.state.obstacle6Y,
            position: 'absolute',
            left: this.state.obstacle6X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle7Style() {
        return {
            top: this.state.obstacle7Y,
            position: 'absolute',
            left: this.state.obstacle7X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle8Style() {
        return {
            top: this.state.obstacle8Y,
            position: 'absolute',
            left: this.state.obstacle8X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle9Style() {
        return {
            top: this.state.obstacle9Y,
            position: 'absolute',
            left: this.state.obstacle9X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle10Style() {
        return {
            top: this.state.obstacle10Y,
            position: 'absolute',
            left: this.state.obstacle10X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle11Style() {
        return {
            top: this.state.obstacle11Y,
            position: 'absolute',
            left: this.state.obstacle11X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }
    obstacle12Style() {
        return {
            top: this.state.obstacle12Y,
            position: 'absolute',
            left: this.state.obstacle12X,
            width: 50,
            height: 50,
            backgroundColor: "#000"
        }
    }


    render() {
        return (
            <World>
                <ScrollingBackground>
                </ScrollingBackground>
                <View style={styles.obstacleContainter}>
                    <View style={this.obstacle1Style()}/>
                    <View style={this.obstacle2Style()}/>
                    <View style={this.obstacle3Style()}/>
                    <View style={this.obstacle4Style()}/>
                    <View style={this.obstacle5Style()}/>
                    <View style={this.obstacle6Style()}/>
                    <View style={this.obstacle7Style()}/>
                    <View style={this.obstacle8Style()}/>
                    <View style={this.obstacle9Style()}/>
                    <View style={this.obstacle10Style()}/>
                    <View style={this.obstacle11Style()}/>
                    <View style={this.obstacle12Style()}/>
                </View>
                <Player obstacles={this.state.allPositions}/>
            </World>

        );
    }
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        paddingTop: 0,
        flex: 1,
    },

    obstacleContainter: {
        alignItems: 'stretch',
        //justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 0,
        paddingTop: 0,
        flex: 1,
        position: 'absolute',
        top: 0,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

    },
    obstacle1: {
        top: 0,
        marginTop: 0,
        width: 50,
        height: 50,
        backgroundColor: "#000"
    },
});

const CONFIG = {
    environmentSpeed: 10,
    gameHeight: Dimensions.get('window').height,
    gameWidth: Dimensions.get('window').width,
}



