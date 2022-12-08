import { StatusBar } from "expo-status-bar";
import styles from "./styles";

import {
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableHighlight,
  Linking,
} from "react-native";
import { WebView } from "react-native-webview";
import React, { useState, useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const onPress = (props) => {
    alert(props.name())
    if (props.name === "twitter") {
      Linking.openURL("https://twitter.com/ScottieFleaco");
    } else {
      Linking.openURL("https://instagram.com/Fleaco");
    }
  };
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SCOTTIE FLEACO</Text>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <Image style={styles.artist} source={require("./assets/artist.jpg")} />
        <View style={styles.musicContainer}>
          <View style={styles.ytContainer}>
            <YoutubePlayer
              width={480}
              height={270}
              play={playing}
              videoId={"RGsaPJ369S0"}
              onChangeState={onStateChange}
            />
            <Text style={styles.playerDescription}>
              NEW MUSIC: DRIVE FEAT HUGE JAY
            </Text>
          </View>
          <View style={styles.linksContainer}>
            <Text style={styles.linkHeader}>MORE MUSIC BELOW</Text>
            <Text>https://www.youtube.com/watch?v=2rq95THs9WE</Text>
            <Text>https://www.youtube.com/watch?v=gRgmIrioD5U</Text>
            <Text>https://tidal.com/browse/artist/27757583</Text>
          </View>
          <View style={styles.socialContainer}>
            <TouchableHighlight onPress={onPress} style={styles.socialTouch} name="twitter">
              <Image
                style={styles.socialIcon}
                source={require("./assets/twitter.png")}
              />
            </TouchableHighlight>
            <TouchableHighlight onPress={onPress} style={styles.socialTouch} name="instagram">
              <Image
                style={styles.socialIcon}
                source={require("./assets/instagram.png")}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}
