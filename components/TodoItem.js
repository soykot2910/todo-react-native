import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => (
  <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <Text style={styles.item}>{item.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "dashed",
  },
});

export default TodoItem;
