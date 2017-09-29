import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

const users = [
    {
        name: 'Order to Thomas Thorup',
        status: 'Sent',
        number: '172',
        currency: 'DKK',
        issued: '2017-04-06',
        total: 'DKK 1.99'
    }
]

export default DocumentViewScreen = (props) => (
    // implemented without image with header
    <Card title="Purchase Order">
        {
            users.map((u, i) => {
                return (
                    <View key={i}>
                        <Text>
                            Name: {u.name}
                        </Text>
                        <Text>Status: {u.status}</Text>
                        <Text>Number: {u.number}</Text>
                        <Text>Currency: {u.currency}</Text>
                        <Text>Date: {u.issued}</Text>
                        <Text>Total: {u.total}</Text>
                    </View>
                );
            })
        }
    </Card>
);

DocumentViewScreen.navigationOptions = {
    title: 'Document Details'
}
