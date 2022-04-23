import React, { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, View} from 'react-native';
import AppText from '../components/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListingEditScreen from './ListingEditScreen';

function ListingsScreen({navigation, route}) {

    const courselist = route.params;
    const [modalOpen, setModalOpen] = useState(false)
    const [listings, setListings] = useState([
        {
          id: 201,
          images: require('../assets/richard.jpg'),
          title: "Pelumi Oyesanya",
          coursetitle: 'Economics',
          levelcategory: "400L",
          phoneno: "Whatsapp Me",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 1,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
      
        },
        {
          id: 3,
          images: require('../assets/kamsi.jpg'),
          title: "Kamsi Okpala",
          coursetitle: 'ISMS',
          levelcategory: "400L",
          phoneno: "9083457418",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 2,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
        },
        {
          id: 1,
          images: require('../assets/richard.jpg'),
          title: "Muna Okpala",
          coursetitle: 'Comp Sc.',
          levelcategory: "300L",
          phoneno: "9083457432",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 3,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
        },
        {
          id: 2,
          images: require('../assets/richard.jpg'),
          title: "Casey Anetor",
          coursetitle: 'Economics',
          levelcategory: "300L",
          phoneno: "7085194964",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 4,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
        },
        {
          id: 102,
          images: require('../assets/richard.jpg'),
          title: "Fiyin Olatunji",
          coursetitle: 'Accounting',
          levelcategory: "400L",
          phoneno: "8086346914",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 5,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
        },
        {
          id: 101,
          images: require('../assets/uzo.jpg'),
          title: "Uzoamaka Nwaiwu",
          coursetitle: 'ISMS',
          levelcategory: "400L",
          phoneno: "Whatsapp Me",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 6,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
        },
        {
          id: 4,
          images: require('../assets/etse.jpg'),
          title: "Etse Aliu",
          coursetitle: 'Bus Admin',
          levelcategory: "400L",
          phoneno: "8066950669",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 7,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
        },
        {
          id: 6,
          images: require('../assets/richard.jpg'),
          title: "Annabel O",
          coursetitle: 'Mass Comm',
          levelcategory: "400L",
          phoneno: "Whatsapp Me",
          subj1: "Mathematics",
          subj2: "English",
          subj3: "Special topics",
          subj4: "NLP",
          userId: 8,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          hrs: "10h/W",
          btext: 'view'
        },
      ]);
      const addListing = (listing) => {
        listing.id = Math.random().toString()
        setListings((currentListings) => {
          return [listing, ...currentListings]
        })
        setModalOpen(false)
      }
      
    return (
      
      <Screen style={styles.screen}>
          <View>
            <Modal visible={modalOpen} animationType='slide'>
              <View style={styles.modalcont}>
                <MaterialCommunityIcons 
                  name='close'
                  size={26}
                  style={styles.modalclose}
                  onPress={() => setModalOpen(false)}
                />
                <ListingEditScreen addListing={addListing}/>
              </View>
            </Modal>
            <Pressable 
            style={styles.btncont}
            onPress={() => setModalOpen(true)}>
              <AppText style={styles.btntext}>List Myself</AppText>
            </Pressable>
                  <FlatList 
                      data={listings}
                      keyExtractor={listings => listings.id.toString()}
                      renderItem={({item}) => (
                              <ListItem style={styles.cont}
                              image={item.images}
                              title={item.title}
                              coursetitle={courselist.coursetitle}
                              subtitle={item.levelcategory}
                              phoneno={item.phoneno}
                              subj1={item.subj1}
                              subj2={item.subj2}
                              subj3={item.subj3}
                              subj4={item.subj4}
                              message={item.description}
                              hrs={item.hrs}
                              buttontext= {item.btext}
                              onPress={() => navigation.navigate("AccountDetails", item)}
                              />
                          )}
          
                  />
          </View>
        </Screen>
        
       
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 20,
    },
    
    contt: {
        padding: 7
    },
    modalcont: {
      padding: 20
    },
    modalclose: {
      alignSelf: 'center',
      color: colors.secondary
    },
    btntext: {
      fontSize: 16,

      color: colors.primary
    },
    btncont: {
      alignSelf: 'center',
      borderWidth: 1,
      borderRadius: 6,
      padding: 4,
      borderColor: colors.primary
    }

})

export default ListingsScreen;

