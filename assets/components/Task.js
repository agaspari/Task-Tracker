import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import {AsyncStorage} from 'react-native';

import * as Constants from '../constants.js';

export default class Task extends Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        const { label, index, removeItem } = this.props;
        return (
            <View style={ Constants.STYLES.container }>
                <Text style={{width:"80%", marginBottom: 30, marginLeft: 10}}>{label}</Text>
                <View style={{width: "15%", marginRight: 10}}>
                    <Button
                        title="X"
                        color="#ff0000"
                        accessibilityLabel="Click here to add a new task"
                        onPress={() => removeItem(index)}
                    />
                </View>
            </View>
        );
    }
}