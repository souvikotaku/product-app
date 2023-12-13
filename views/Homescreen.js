import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.nameheading}>Hey, Rahul</Text>
          <TextInput
            style={styles.input}
            placeholder="Search Products or store"
            placeholderTextColor="white"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "6%",
            }}
          >
            <View>
              <Text style={styles.letterone}>DELIVERY TO</Text>
              <Text style={styles.lettertwo}>Green Way 3000, Sylhet</Text>
            </View>

            <View>
              <Text style={styles.letteroneright}>WITHIN</Text>
              <Text style={styles.lettertworight}>1 Hour</Text>
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <ScrollView horizontal={true}>
            <View
              style={{
                backgroundColor: "blue",
              }}
            >
              <Text>Child 1</Text>
            </View>

            <View
              style={{
                backgroundColor: "blue",
              }}
            >
              <Text>Child 1</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: "center",
    justifyContent: "start",
  },
  container2: {
    // flex: 1,
    paddingTop: "17%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "#2A4BA0",
    width: "100%",
    height: 270,
  },
  container3: {
    // flex: 1,
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "pink",
    width: "100%",
    height: 200,
  },
  nameheading: {
    textAlign: "left",
    // fontFamily: "Manrope",
    // fontWeight: "bold",
    fontSize: 22,
    lineHeight: 30,
    color: "white",
  },
  input: {
    height: 40,
    backgroundColor: "#153075",
    marginTop: 30,
    borderRadius: 28,
    height: 56,
    padding: 20,
    color: "white",
  },
  letterone: {
    fontSize: 11,
    color: "#F8F9FB",
    opacity: 0.5,
  },
  letteroneright: {
    fontSize: 11,
    color: "#F8F9FB",
    opacity: 0.5,
    textAlign: "right",
  },
  lettertwo: {
    fontSize: 14,
    color: "#F8F9FB",
  },
  lettertworight: {
    fontSize: 14,
    color: "#F8F9FB",
    textAlign: "right",
  },
});
