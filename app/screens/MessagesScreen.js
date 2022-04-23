import React, {useState} from 'react';
import { FlatList, View, StyleSheet, Image} from 'react-native';
import MessageList from '../components/MessageList';
import ListItemSeparator from '../components/ListItemSeparator';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText'
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
    {
        id: 1,
        image: require('../assets/richard.jpg'),
        title: "Samantha",
        subtitle: "Hey would you be interested in tutoring me?",




    },
    {
        id: 2,
        image: require('../assets/richard.jpg'),
        title: "Pelumi Oyesanya",
        subtitle: "Hello, i'm in need of tutoring in both Econometrics and statistics",


    },
    {
        id: 3,
        image: require('../assets/richard.jpg'),
        title: "Pelumi Oyesanya",
        subtitle: "Please i need help for an upcoming exam i have",


    }

]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)


    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id))
    }
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({item}) => (
                    <MessageList
                    imagee={item.image}
                    title={item.title}
                    subtitle={<AppText style={styles.titlee}>{item.subtitle}</AppText>}
                    onPress={() => console.log('clicked')}
                    renderRightActions={() => 
                    <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />
                    )}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            image: require('../assets/richard.jpg'),
                            title: "Pelumi Oyesanya",
                            subtitle: "ISMS 400L",
                    
                    
                        },
                        {
                            id: 3,
                            image: require('../assets/richard.jpg'),
                            title: "Pelumi Oyesanya",
                            subtitle: "ISMS 400L",
                    
                    
                        }
                    ])
                }}
    
            />
        </Screen>
        
       
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 10,
        
    },
    titlee: {
        color: 'grey',
        fontSize: 14
    },
    
    screenCont: {
        backgroundColor: colors.light
    },
})

export default MessagesScreen;