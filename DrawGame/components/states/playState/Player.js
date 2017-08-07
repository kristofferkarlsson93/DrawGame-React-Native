/**
 * Created by Kristoffer on 2017-07-26.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';
import PropTypes from 'prop-types'


export default class PlayState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionY: 0,
            positionX: 0,
            controller: true,
        }

    }

    static contextTypes = {
        loop: PropTypes.object,
    };

    inRange = (num1, num2, numTest) => {
        [min, max] = [num1, num2].sort((a, b) => a > b);
        if (numTest > min && numTest < max) {
            return true;
        }
        return false;
    }

    update = () => {


        var currentPosition = {x: Math.floor(this.state.positionX), y: Math.floor(this.state.positionY)};
        //console.log(this.state.positionX);
        this.props.obstacles.map(function(obstacle) {
            //console.log(currentPosition.x);
            if (this.inRange(currentPosition.x - 100, currentPosition.x + 100, obstacle.posX) &&
            this.inRange(currentPosition.y - 100, currentPosition.y + 100, obstacle.posY)) {
                console.log("failed");
            }
            //console.log(this.state.positionX);

        }, this)

    }

    componentDidMount() {
        this.context.loop.subscribe(this.update)
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    onResponderGrant(evt) {
        console.log("Responder grant");
        console.log("Y: " + evt.nativeEvent.locationX)
        console.log("Obstacle: " + this.props.obstacles[0].posY);
        this.setState({
            positionX: evt.nativeEvent.locationY,
            positionY: evt.nativeEvent.locationX
        });



    }

    onResponderReject(evt) {
        console.log("Responder reject");

    }

    onResponderMove(evt) {
        this.setState({
            positionX: evt.nativeEvent.locationY,
            positionY: evt.nativeEvent.locationX
        });
        /*console.log("X: " + evt.nativeEvent.locationX)
        console.log("Obstacle: " + this.props.obstacles[0].posX);*/
    }

    onResponderRelease(evt) {
        console.log("responder release");
    }

    onResponderTerminationRequest(evt) {
        console.log("termination request");
    }

    onResponderTerminate(evt) {
        console.log("Terminated");
    }

    onPressLearnMore() {
        console.log("Klick");
    }

    render() {
        return (
            <View
                style={styles.container}
                onStartShouldSetResponder={evt=>true}
                onMoveShouldSetResponder={evt=>true}
                onResponderGrant={this.onResponderGrant.bind(this)}
                onResponderReject={this.onResponderReject.bind(this)}
                onResponderMove={this.onResponderMove.bind(this)}
                onResponderRelease={this.onResponderRelease.bind(this)}
                onResponderTerminationRequest={this.onResponderTerminationRequest.bind(this)}
                onResponderTerminate={this.onResponderTerminate.bind(this)}
            >

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 0,
        paddingTop: 0,
        flex: 1,
        //height: Dimensions.get('window').height,
        top: 0,
        width: Dimensions.get('window').width,
        //position: 'absolute',
       // top: - Dimensions.get('window').height/2,
        backgroundColor: 'transparent',

    },
});


