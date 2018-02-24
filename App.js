import React, { Component } from "react";
import { StatusBar } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";

import HomeStackNavigator from "./src/components/navigation/home-stack-navigator";
import { COLORS } from "./src//constants/styles";
import styled from "styled-components/native";

const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.GREY_PRIMARY};
`;

const AppContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BLACK_PRIMARY};
`;

const drawerRouteConfig = {
  Home: {
    screen: HomeStackNavigator
  }
};

const CustomDrawerContentComponent = props => (
  <DrawerContainer>
    <DrawerItems {...props} />
  </DrawerContainer>
);

const drawerNavigatorConfig = {
  contentComponent: props => <CustomDrawerContentComponent {...props} />
};

const AppDrawer = DrawerNavigator(drawerRouteConfig, drawerNavigatorConfig);

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <StatusBar hidden={true} />
        <AppDrawer />
      </AppContainer>
    );
  }
}
