import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import * as Constants from './constants.js';

import HomeView from './windows/HomeView.js';
import TasksView from './windows/TasksView.js';
import AddTaskView from './windows/AddTaskView.js';

export default class MainView extends Component{
    constructor() {
        super();
        this.state = {
            currentView: 0,
        }
    }

    changeView = (viewNum) => {
        const { currentView } = this.state;
        this.setState({ currentView: (currentView === viewNum) ? 0 : viewNum });
    }
    
    render() {
        const { currentView } = this.state;

        let window;
        switch(currentView) {
            case 0:
                window = <HomeView />;
                break;
            case 1:
                window = <AddTaskView />;
                break;
            case 2:
                window = <TasksView />;
                break;
            default:
                window = <HomeView />;
                break;
        }

        return (
            <View style={Constants.STYLES.container}>
                <View>
                    {window}
                </View>
                <View style={Constants.STYLES.bottom}>
                    <View style={Constants.STYLES.button}>
                        <Button
                            title="Add New Task"
                            color={currentView === 1 ? Constants.BUTTON_ACTIVE : Constants.BUTTON_PRIMARY}
                            accessibilityLabel="Click here to add a new task"
                            onPress={() => this.changeView(1)}
                        />
                    </View>
                    <View style={Constants.STYLES.button}>
                        <Button
                            title="View All Tasks"
                            color={currentView === 2 ? Constants.BUTTON_ACTIVE : Constants.BUTTON_PRIMARY}
                            accessibilityLabel="Click here to add a new task"
                            onPress={() => this.changeView(2)}
                        />
                    </View>
                </View>
            </View>
        );
    }
    
}
