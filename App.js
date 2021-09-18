import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffe", key: "1" },
    { text: "buy coffe", key: "2" },
    { text: "buy coffe", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random.toString() }, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
