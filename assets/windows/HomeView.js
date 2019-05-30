import React, {Component} from 'react';
import { Button } from 'react-native';

export default class HomeView extends Component{
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <Button
                title="Add New Task"
                color="#00ff00"
                accessibilityLabel="Click here to add a new task"
                onPress={() => { console.log("test")}}
            />
        );
    }
}