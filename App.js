import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import WalletScreen from "./components/WalletScreen";
import ReferAndEarnScreen from "./components/ReferAndEarnScreen";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class DashboardScreen extends Component {
  static navigationOptions = {
    title: "Dashboard",
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

/*class WelcomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome",
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>WelcomeScreen</Text>
        <Button
          title="Go to DashboardScreen"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        />
      </View>
    );
  }
}*/

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardNavigator: DashboardScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

/*const WelcomeStackNavigator = createStackNavigator(
  {
    WelcomeNavigator: WelcomeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);*/

const ReferAndEarnStackNavigator = createStackNavigator(
  {
    ReferAndEarn: ReferAndEarnScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const WalletStackNavigator = createStackNavigator(
  {
    Wallet: WalletScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
    navigationOptions: {
      drawerIcon: <Icon name="md-home" size={20}></Icon>,
    },
  },

  ReferAndEarn: {
    screen: ReferAndEarnStackNavigator,
    navigationOptions: {
      drawerIcon: <Icon name="md-gift" size={20}></Icon>,
    },
  },

  Wallet: {
    screen: WalletStackNavigator,
    navigationOptions: {
      drawerIcon: <Icon name="md-wallet" size={20}></Icon>,
    },
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
  //Welcome: { screen: WelcomeScreen },
  ReferAndEarn: { screen: ReferAndEarnScreen },
  Wallet: { screen: WalletScreen },
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
