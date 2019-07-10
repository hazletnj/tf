import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./homescreen";
import MapScreen from "./containers/mapscreen";
import MapScreen2 from "./containers/mapscreen2";
import YourLocation from "./components/yourlocation";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    Map2: MapScreen2,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#4f6d7a"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }
      }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
  }
}
