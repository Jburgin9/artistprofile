import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    artist: {
      width: "30%",
      resizeMode: "center",
      backgroundColor: "black",
      borderTopLeftRadius: 6,
      borderBottomRightRadius: 6,
    },
    container: {
      flex: 1,
      borderColor: "dodgerblue",
      borderWidth: 3,
    },
    contentContainer: {
      flex: 1,
      flexDirection: "row",
      marginTop: "25px",
      marginBottom: "25px",
      justifyContent: "space-evenly",
      height: 'fit-content'
    },
    linksContainer: {
      flex: 1,
      marginTop: "25px",
      backgroundColor: "grey",
      padding: "10px",
    },
    linkHeader: {
      alignSelf: "center",
      marginBottom: "5px",
    },
    musicContainer: {
      alignItems: "center",
      backgroundColor: "pink",
      borderTopLeftRadius: 6,
      borderBottomRightRadius: 6,
      height: "fit-parent",
      padding: "20px",
    },
    title: {
      backgroundColor: "black",
      height: "5%",
      color: 'white',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      alignItems: "center",
    },
    playerDescription: {
      marginTop: "10px",
    },
    socialIcon: {
      width: "50%",
      height: "50%",
      resizeMode: "center",
    },
    socialTouch: {
      width: "100%",
      height: "100%",
      alignItems: 'center'
    },
    socialContainer: {
      flex: 1,
      width: "25%",
      marginTop: "2%",
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: '5px'
    },
    ytContainer: {}
  });
  
  
  export default styles