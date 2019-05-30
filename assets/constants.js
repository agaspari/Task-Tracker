import { StyleSheet } from 'react-native';

export const BUTTON_PRIMARY = "#3f3f3f"
export const BUTTON_ACTIVE = "#a02401"

export const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        height: "80%",
        width: "100%",
        minWidth: "100%",
    },
    bottom: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: "1%"
    },
    button: {
        width: 100,
        height: 50,
        margin: 10,
    }
});