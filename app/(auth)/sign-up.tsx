import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function signUp() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"}/>
      <Text className="font-bold text-2xl">signup</Text>
    </SafeAreaView>
    
  );
}
