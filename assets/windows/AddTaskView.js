import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Keyboard } from 'react-native';

import { Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import * as Constants from '../constants.js';

export default class AddTaskView extends Component{
    constructor() {
        super();
        this.state = {
            taskName: "",
        }
    }

    addTask = async task => {
        if(task.trim().length === 0) return;
        try {
            this.setState({ taskName: ""});
            this.refs.taskInput.blur();
            AsyncStorage.getItem('myTasks')
            .then((req) => {
                if(req === null) return [];
                return JSON.parse(req);
            })
            .then((json) => {
                json.push({"value" : task});
                AsyncStorage.setItem('myTasks', JSON.stringify(json));
            })
            .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return(
            <View style={{flexDirection: 'row', flex: .2}}>
                <View style={Constants.STYLES.button}>
                    <TextInput
                        style={{borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({taskName: text})}
                        value={this.state.taskName}
                        ref="taskInput"
                    />
                </View>
                
                <View style={Constants.STYLES.button}>
                    <Button
                        title="Add Task"
                        color="#0000ff"
                        accessibilityLabel="Click here to add a new task"
                        onPress={() => this.addTask(this.state.taskName)}
                    />
                </View>
            </View>
            
        );
    }
}