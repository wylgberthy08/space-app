import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import AppLoading from "expo-app-loading";
import theme from "./src/styles/theme";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  DMSans_700Bold,
  DMSans_500Medium,
} from "@expo-google-fonts/dm-sans";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_700Bold,
    DMSans_500Medium,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
