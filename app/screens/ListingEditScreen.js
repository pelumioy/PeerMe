import React from "react";
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import AppImagePicker from "../components/forms/AppImagePicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  hrs: Yup.string().required().min(1).label("Hrs"),
  subj1: Yup.string().required().min(1).label("Subj1"),
  subj2: Yup.string().required().min(1).label("Subj2"),
  subj3: Yup.string().required().min(1).label("Subj3"),
  subj4: Yup.string().required().min(1).label("Subj4"),
  btext: Yup.string().required().min(1).label("Btext"),
  levelcategory:Yup.string().required().min(1).label("Level"),
  category: Yup.object().required().nullable().label("Category"),
  phoneno: Yup.string().required().min(1).label("Phoneno"),
  description: Yup.string().label("Description"),
  image: Yup.array().min(1, 'Please select an image'),
});

const categories = [
  {label: 'Accounting', value: 1},
  {label: 'Economics', value: 2},
  {label: 'Bus Admin', value: 3},
  {label: 'Mass Comm', value: 4},
  {label: 'Computer Sc.', value: 5}
];

function ListingEditScreen({addListing}) {
  return (
    <ScrollView>

    <View style={styles.container}>
      <Form
        initialValues={{
          title: "",
          description: "",
          category: null,
          levelcategory: "",
          phoneno: "",
          images: [],
          subj1: "",
          subj2: "",
          subj3: "",
          subj4: "",
          hrs: "10h/W",
          btext: "VIEW"
        }}
        onSubmit={(values) => {
          addListing(values)
          console.log(values)}}
        validationSchema={validationSchema}
      >
        <AppImagePicker name="images"/>
        <FormField maxLength={255} name="title" placeholder="Fullname"/>
        <FormField maxLength={50} name="levelcategory" placeholder="Level" />
        <Picker items={categories} name="category" placeholder="Course" />
        <FormField maxLength={30} name="subj1" placeholder="Core Subjet 1"/>
        <FormField maxLength={30} name="subj2" placeholder="Core Subjet 2"/>
        <FormField maxLength={30} name="subj3" placeholder="Core Subjet 3"/>
        <FormField maxLength={30} name="subj4" placeholder="Core Subjet 4"/>
        <FormField maxLength={50} name="phoneno" placeholder="phone number" keyboardType="numeric" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
