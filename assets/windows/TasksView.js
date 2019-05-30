import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native';
import {AsyncStorage} from 'react-native';
import * as Constants from '../constants.js';
import Task from '../components/Task.js';

export default class TaskView extends Component{
    constructor() {
        super();
        this.state = {
            data: null,
        }
    }

    removeItem = (index) => {
        try {
            AsyncStorage.getItem('myTasks')
            .then((req) => {
                if(req === null) return [];
                return JSON.parse(req);
            })
            .then((json) => {
                json.splice(index, 1);
                this.setState({data: json});
                AsyncStorage.setItem('myTasks', JSON.stringify(json));
            })
            .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }

    retrieveData = () => {
        try {
            AsyncStorage.getItem('myTasks')
            .then((req) => {
                if(req === null) return [];
                this.setState({data: JSON.parse(req)});
            })
            .catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.retrieveData();
    }

    render() {
        const { data } = this.state;
        if (data) {
            return(
                <View>
                    <ScrollView style={Constants.STYLES.scrollView}>
                        {
                            data.map((item, index) => (
                                <View key={index}>
                                    <Task
                                        index={index}
                                        label={item.value}
                                        removeItem={(index) => this.removeItem(index)}
                                    />
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            );
        }
        return (
            <View>

            </View>
        )
        
    }
}