import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text style={styles.text}>Title:</Text>
      <Text style={styles.blogText}>{blogPost.title}</Text>
      <Text style={styles.text}>Content:</Text>
      <Text style={styles.blogText}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={40} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  text: {
    margin: 5
  },
  blogText: {
    fontSize: 18,
    margin: 10
  }
});

export default ShowScreen;
