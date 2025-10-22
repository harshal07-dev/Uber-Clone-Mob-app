import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Onboarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < onboarding.length - 1) {
      swiperRef.current?.scrollBy(1);
    } else {
      router.replace("/(auth)/sign-up");
    }
  };

  const handleSkip = () => {
    router.replace("/(auth)/sign-up");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={"dark-content"} />

      <TouchableOpacity
        onPress={handleSkip}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-bold">Skip</Text>
      </TouchableOpacity>

      <View className="flex-1 justify-center items-center px-6">
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
          }
          activeDot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((item) => (
            <View key={item.id} className="flex-1 justify-center items-center">
              <Image 
                source={item.image} 
                className="w-85 h-80 mb-8"
                resizeMode="contain"
              />
              <Text className="text-3xl font-bold text-center text-black mb-4">
                {item.title}
              </Text>
              <Text className="text-lg text-center text-gray-600 px-4">
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>
      </View>

      <View className="p-6">
        <TouchableOpacity
          onPress={handleNext}
          className="bg-[#0286FF] py-4 px-8 rounded-full"
        >
          <Text className="text-white text-lg font-semibold text-center">
            {activeIndex === onboarding.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
