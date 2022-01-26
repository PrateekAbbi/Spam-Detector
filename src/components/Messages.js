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

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Messages = (props) => {
    console.log(props.data._id);
    return (
        <Card>
            {/* <Divider /> */}
            <TouchableRipple
                onPress={() => { alert(props.data.body) }}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Card.Title titleStyle={{ color: "grey",fontWeight:'bold',  marginLeft:0  }}
                    title={props.data.address}
                    subtitle={props.data.body}
                    // left={(props) => <Icon {...props} size={30} style={{ paddingLeft:7, paddingTop:4, color: '#F32013',backgroundColor:'#b5b3b3',  borderRadius:50, height:40, width:40}} name="exclamation-circle" />}
                    right={(props) => <Icon {...props} size={30} style={{ marginRight:8 , paddingLeft:0, paddingTop:4, color: '#F32013',  borderRadius:50, height:40, width:40}} name="exclamation-circle" />}
                    
                />
            </TouchableRipple>
            {/* <Icon name="exclamation" size={30} color="#900" /> */}
        </Card>
    );
}

export default Messages;