import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { ReleaseDetails } from "../pages/ReleaseDetails";
import { SignIn } from "../pages/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="ReleaseDetails" component={ReleaseDetails} />
    </Navigator>
  );
}
