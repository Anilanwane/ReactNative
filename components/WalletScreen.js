import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import Icon from "react-native-vector-icons/Ionicons";

export default class WalletScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <LinearGradient
            colors={["#F96E05", "#F8B684", "#F9F6F4"]}
            style={{
              padding: 15,
              width: "95%",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textShadowColor: "gray",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 2,
              }}
            >
              Wallet Balance
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textShadowColor: "gray",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 2,
              }}
            >
              Rs.500
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.Image}>
          <Image
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-GPKGXOpnuDM96aFsDa3QHGsJLF3x3b6-lw&usqp=CAU",
            }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.mycash}>
          <LinearGradient
            colors={["#F5D40B", "#F9F8F2"]}
            style={{
              padding: 15,
              width: "95%",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                textShadowColor: "gray",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 2,
              }}
            >
              My cash
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textShadowColor: "gray",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 2,
                //backgroundColor: "#F5D40B",
                borderWidth: 2,
                borderColor: "#A3A29D",
                borderStyle: "dotted",
                borderRadius: 10,
                padding: 5,
              }}
            >
              Rs.250
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.promocash}>
          <LinearGradient
            colors={["#0DBAF3", "#F9F8F2"]}
            style={{
              padding: 15,
              width: "95%",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                textShadowColor: "gray",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 2,
              }}
            >
              Promo cash
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                //color: "white",
                textShadowColor: "gray",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 2,
                //backgroundColor: "#F5D40B",
                borderWidth: 2,
                borderColor: "#A3A29D",
                borderStyle: "dotted",
                borderRadius: 10,
                padding: 5,
              }}
            >
              Rs.250
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.transactions}>
          <Text style={{ color: "#B2ABA6", fontWeight: "bold", fontSize: 20 }}>
            Transactions
          </Text>
        </View>
        <View style={styles.details}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              First Transaction
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Rs.250</Text>
          </View>
          <View>
            <Text>Done on 13/09/2020 at 2:19 AM.</Text>
            <Text style={{ color: "red" }}>Expires on 14/09/2020.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  Image: {
    width: "70%",
    height: "35%",
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: 5,
  },
  mycash: {
    marginBottom: 10,
  },
  promocash: {
    marginBottom: 10,
  },
  transactions: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  details: {
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#B2ABA6",
    borderStyle: "dotted",
    width: "95%",
    padding: 5,
  },
});
