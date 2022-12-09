import React from "react";
import styles from "./styles";
import { View, Text } from 'react-native'

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <View style={styles.titleBar}>
        <Text style={styles.title}>SCOTTIE FLEACO</Text>
      </View>
    );
  }
}

