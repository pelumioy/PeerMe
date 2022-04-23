import React, {useState} from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import colors from "../config/colors";

function AppPicker({ placeholder, onSelectItem, selectedItem, items, icon, ...otherProps }) {
const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
        {icon && (
            <MaterialCommunityIcons
            name={icon}
            size={23}
            color={defaultStyles.colors.medium}
            style={styles.icon}
            />
        )}
            {selectedItem ? <AppText style={{flex: 1}}>{selectedItem.label}</AppText> : <AppText style={{color: colors.medium, fontSize: 18, flex: 1}}>{placeholder}</AppText>}
            <MaterialCommunityIcons
            name= 'chevron-down'
            size={23}
            color={defaultStyles.colors.medium}
            style={styles.iconn}
            />
        </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
        <Screen>
            <Button title='close' onPress={() => setModalVisible(false)}/>
            <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}
                renderItem={({item}) => 
                    <PickerItem
                        label={item.label}
                        onPress={() => {
                          setModalVisible(false)
                          onSelectItem(item)
                        }
                        }/>}
                />
        </Screen>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  iconn: {
    marginRight: 10,
  },
});

export default AppPicker;
