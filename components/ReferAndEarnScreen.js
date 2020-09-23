import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Stylesheet,
  TextInput,
  ImageBackground,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { color } from "react-native-reanimated";
import { Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

export default class ReferAndEarnScreen extends Component {
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            top: 20,
            marginBottom: 20,
            alignSelf: "center",
            alignItems: "center",
            width: "95%",
          }}
        >
          <Text
            style={{
              borderBottomColor: "#F4510A",
              borderBottomWidth: 2,
              borderRadius: 20,
              borderStyle: "solid",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              color: "#F4510A",
              marginBottom: 10,
              textShadowColor: "#F78993",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 2,
            }}
          >
            Refer your friends and start earning
          </Text>
        </View>

        <View>
          <ImageBackground
            style={{
              width: "98%",
              height: 250,
              alignSelf: "center",
              alignItems: "center",
              //marginLeft: "13%",
            }}
            source={{
              uri:
                "https://abacare.org.uk/wp-content/uploads/sites/10/2018/10/gjfgj.png",
            }}
            resizeMode="contain"
          ></ImageBackground>
        </View>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            alignItems: "center",
            backgroundColor: "#F6B599",
            padding: 10,
            borderwidth: 1,
            borderColor: "#797877",
            borderRadius: 10,
            /*shadowColor: "#F6162B",
            shadowOffset: { width: 2, height: 2 },
            shadowRadius: 3,*/
            marginBottom: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>How does it work?</Text>
          <Text
            style={{
              textAlign: "left",
              textShadowColor: "#F78993",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 2,
            }}
          >
            Invite your Friends to download Dyniz app and you both earn Rs.100.
          </Text>
          <Text
            style={{
              textAlign: "left",
              textShadowColor: "#F78993",
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 2,
            }}
          >
            Complete the first booking on Dyniz app and you both will get
            Rs.200.
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#696D6C",
            }}
          >
            Share your referral code
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: 40,
            width: "95%",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              width: "55%",
              fontSize: 20,
              padding: 4,
              fontWeight: "bold",
              backgroundColor: "#C0DDD6",
              textAlign: "center",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            AA0001
          </Text>
          <Button
            style={{
              backgroundColor: "#F6B599",
            }}
          >
            Copy
          </Button>
        </View>
        <View
          style={{
            width: "95%",
            backgroundColor: "#F4510A",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          <Button>
            <Text style={{ color: "white", fontSize: 18 }}>SHARE LINK</Text>
          </Button>
        </View>
        <View
          style={{
            top: 20,
            marginBottom: 20,
            alignSelf: "center",
            alignItems: "center",
            width: "95%",
          }}
        >
          <Text
            style={{
              borderBottomColor: "#F4510A",
              borderBottomWidth: 2,
              borderRadius: 20,
              borderStyle: "solid",
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "center",
              color: "#F4510A",
              textShadowColor: "#F78993",
              marginBottom: 10,
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 2,
            }}
          >
            Rewards
          </Text>
        </View>
        <View
          style={{
            margin: "2.5%",
            backgroundColor: "#F8BD9C",
            borderWidth: 1,
            borderColor: "#989492",
            borderStyle: "dotted",
            borderRadius: 15,
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            styles={{
              fontSize: 25,
            }}
          >
            Coupan Earned
          </Text>
          <Text
            styles={{
              fontSize: 25,
            }}
          >
            0
          </Text>
        </View>
      </ScrollView>
    );
  }
}
