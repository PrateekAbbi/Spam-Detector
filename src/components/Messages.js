import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Touchable
} from 'react-native';
import {
    Card, Title, Paragraph,
    Avatar,
    Badge,
    IconButton,
    TouchableRipple,
    Divider,
} from 'react-native-paper';



const Messages = () => {
    return (
        <Card>
            <Divider />
            <TouchableRipple
                onPress={() => {alert('rohn')}}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Card.Title
                    title="700 2098889"
                    subtitle="This is demo Message..."
                    left={(props) => <Avatar.Icon {...props} style={{ backgroundColor: 'grey', }} icon="message" />}
                    right={(props) => <Text style={{ marginRight: 16, color: 'red', fontSize: 12 }} >spam</Text>}
                />
            </TouchableRipple>
        </Card>
    );
}

export default Messages;