import { icons } from "@/constants";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
const OAuth = () => {
    const handleGoogleSignIn = async() => {
        router.replace("/(auth)/sign-in")
    }
  return (
    <View>
      {/* Divider */}
      <View className="flex flex-row justify-center items-center gap-x-3">
        <View className="flex-1 h-[1px] bg-neutral-500" />
        <Text className="text-base text-neutral-500">Or</Text>
        <View className="flex-1 h-[1px] bg-neutral-500" />
      </View>
      <CustomButton
        title="Log In with Google"
        className="mt-5 border border-neutral-300"
        textStyle="text-black text-base font-semibold"
        IconLeft={() => (
            <Image source={icons.google} resizeMode="contain" className="w-5 h-5 mx-2"/>
        )}
        bgVarient="outline"
        textVarient="primary"
        onPress={handleGoogleSignIn}
      />

      {/* Google Login Button */}
    </View>
  );
};

export default OAuth;
