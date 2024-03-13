import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootProvider } from "src/CTX/RootContext";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    DmSans: require("../../assets/fonts/DmSans.ttf"),
    Gilroy: require("../../assets/fonts/Gilroy-SemiBold.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootProvider>
          <Stack
            key={"root"}
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              statusBarHidden: false,
              statusBarStyle: "dark",
              statusBarAnimation: "slide",
            }}
          ></Stack>
        </RootProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}
