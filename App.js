import styles from "./styles";
import { View, Image, } from "react-native";
import HeaderComponent from "./headercomponent";
import MusicComponent from "./musiccomponent";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent/>
      <View style={styles.contentContainer}>
        <Image style={styles.artist} source={require("./assets/artist.jpg")} />
        <MusicComponent/>
      </View>
    </View>
  );
}
