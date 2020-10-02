import React, {useState} from "react";
import {View, Button, StyleSheet, Alert, Image} from "react-native";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#c6d9ec",
  },
  //overordenet container

  pictureLogo: {
    justifyContent: 'flex-end',
  },

  borderColorRed:{
    borderColor: 'red',
  },
  borderColorGreed:{
    borderColor: 'green',
  },

  floatingButton: {
    flex: 1,
    borderWidth: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    marginVertical: 0,
    position: 'relative',
    borderRadius: 40,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  //knappen

  separator: {
    marginVertical: 8,
  },
  // laver "luften" mellem de to knapper
});


const App = () => {

 // const [borderColor, setBorderColor]= useState(styles.floatingButtonRed)

  const [borderFlip, setBorderFlipColor]= useState(false)

  function flipBorderColor(){
    setBorderFlipColor(!borderFlip)  
  }

// setBorderColor-funktion(den er gul!) bliver på magisk vis oprettet for os
// når den kaldes bruges Reacts fede ting (via useSatate) til at ændre på 'borderColor'

// a ? b : c .... hvis a er sand, så b, ellers c

  return (
    <View style={styles.screenContainer}>
      <View style={[styles.floatingButton, borderFlip ? styles.borderColorGreed : styles.borderColorRed]}>   
        <Image style={{ width: 300, height: 300}}source={require('./fedt.png')} />
        <Separator/>
        <Button title="Tilmeld til forelæsning" onPress={() => Alert.alert('DU ER NU TILMELDT FORELÆSNINGEN')} />
        <Separator/>
        <Button title="Tilmeld til gruppearbejde" onPress={() => Alert.alert('DU ER NU TILMELDT GRUPPPEMØDE')} />
        <Separator/>
        <Button color='red' title= "COLOR TEST" onPress={flipBorderColor}> {/* behøver ikke parameter, så bare reference istedet for at kalde den */}
        </Button>
      </View>
    </View>
  );  
};

const BorderChange = () => (
  <View style={styles.floatingButtonGreen} />
);

const Separator = () => (
  <View style={styles.separator} />
);

export default App;


