import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Orders from "./components/Orders";

export default function App() {
  return (
    <View style={styles.container}>
      <Orders></Orders>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
