import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'
import { NavigationActions } from 'react-navigation';

const list = [
    {
        name: 'Amy Farha',
        avatar: require('../../assets/images/document-state.png'),
        subtitle: 'Approved - Purchase Request - #419 - ISSUE DATE: 06/04/2017'
    },
    {
        name: 'Chris Jackson',
        avatar: require('../../assets/images/document-state-alt.png'),
        subtitle: 'Sent - Purchase Order - #418 - ISSUE DATE: 06/04/2017'
    },
    {
        name: 'Thomas Thorup',
        avatar: require('../../assets/images/document-state-alt.png'),
        subtitle: 'Sent - Purchase Order - #418 - ISSUE DATE: 06/04/2017'
    },
    {
        name: 'Jane Olsen',
        avatar: require('../../assets/images/document-state.png'),
        subtitle: 'Approved - Purchase Request - #419 - ISSUE DATE: 02/04/2017'
    },
    {
        name: 'Chris Jackson',
        avatar: require('../../assets/images/document-state-alt.png'),
        subtitle: 'Sent - Purchase Order - #418 - ISSUE DATE: 02/03/2016'
    }

]

const DocumentListScreen = (props) => (
    <List containerStyle={{marginBottom: 20}}>
        {
            list.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.name}
                    avatar={l.avatar}
                    subtitle={l.subtitle}
                    onPress={props.goto}
                />
            ))
        }
    </List>
);

DocumentListScreen.navigationOptions = {
    title: 'Document List'
}


const mapStateToProps = state => ({
    navigation: state.navigation
});

const mapDispatchToProps = dispatch => ({
    goto: () => (
        dispatch(NavigationActions.navigate({routeName: 'DocumentView'}))
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentListScreen);
