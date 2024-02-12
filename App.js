import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import mole from "./assets/mole.jpg";
import hole from "./assets/hole.jpg";
import Styles from "./styles/page-styles.js";

export default function App() {
  return (
    <View style={Styles.container}>
          <Image source={hole}/>
          <Image source={hole}/>
          <Image source={hole}/>
          <Image source={hole}/>
      <StatusBar style="auto" />
    </View>
  );
};
