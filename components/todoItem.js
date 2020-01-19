import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.item}>{item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.deleteTodo}></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 16,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderRadius: 10
  },
  item: {
    // padding: 16,
    // marginTop: 16,
    // borderColor: "#bbb",
    // borderWidth: 1,
    // borderStyle: "dashed",
    // borderRadius: 10
  },
  deleteTodo: {
    color: "white",
    paddingHorizontal: 10,
    borderColor: "#75C41E",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 50
  }
});
