import React from "react";
import { useCallback, useRef, useState } from "react";
import { View, Text, TouchableHighlight, Image, Linking } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./styles";

export default function MusicComponent() {
  const onPressTwit = () => {
    Linking.openURL("https://twitter.com/ScottieFleaco");
  };

  const onPressInstagram = () => {
    Linking.openURL("https://instagram.com/Fleaco");
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
        <View style={styles.linkHeader}>
          <Text style={styles.link}>MORE MUSIC BELOW</Text>
        </View>
        <TouchableHighlight>
          <Text style={styles.link}>
            https://www.youtube.com/watch?v=2rq95THs9WE
          </Text>
        </TouchableHighlight>
        <Text style={styles.link}>
          https://www.youtube.com/watch?v=gRgmIrioD5U
        </Text>
        <Text style={styles.link}>
          https://tidal.com/browse/artist/27757583
        </Text>
      </View>
      <View style={styles.socialContainer}>
        <TouchableHighlight
          onPress={onPressTwit}
          style={styles.socialTouch}
        >
          <Image
            style={styles.socialIcon}
            source={require("./assets/twitter.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={onPressInstagram}
          style={styles.socialTouch}
        >
          <Image
            style={styles.socialIcon}
            source={require("./assets/instagram.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}
