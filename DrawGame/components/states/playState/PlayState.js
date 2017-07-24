/**
 * Created by Kristoffer on 2017-07-21.
 */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types'





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
        return (<Background>

            </Background>

        );
    }
}


class Background extends React.Component {

    constructor(props) {
        super(props);
    }

    update() {
        console.log("hej")

    }

    render() {
        return ( <Image
                source={require("./background.jpg")}
                style={styles.backgroundImage}/>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        resizeMode: 'stretch', // or 'stretch'
        height: 10,
    }
});
