/**
 * Created by Kristoffer on 2017-07-26.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
import PropTypes from 'prop-types'


export default class PlayState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionY: 0,
            positionX: 0,
        }

    }

    static contextTypes = {
        loop: PropTypes.object,
    };

    update = () => {

    }

    componentDidMount() {
        this.context.loop.subscribe(this.update)
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    onResponderGrant(evt) {
        console.log("Responder grant");
    }

    onResponderReject(evt) {
        console.log("Responder reject");
    }

    onResponderMove(evt) {

        this.setState({
            positionX: evt.nativeEvent.pageX,
            positionY: evt.nativeEvent.pageY
        });
        console.log(this.state.positionY);

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

                <Text>BAAAAJSSSS</Text>
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


