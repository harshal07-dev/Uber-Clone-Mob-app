import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const onSignUpPress = async() => {

  }
  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        </View>
        <Text className="text-3xl text-black font-semibold absolute bottom-5 left-5">
          Create Your Account
        </Text>
      </View>
      <View className="p-5">
        <InputField
          label="Name"
          placeholder="Enter your name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        
        <InputField
          label="Email"
          placeholder="Enter your email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <InputField
          label="Password"
          placeholder="Enter your password"
          icon={icons.lock}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
          secureTextEntry={true}
        />
        <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6 bg-primary-600"/>
        <OAuth/>
        
        <View className="mt-6">
          <Link href="/(auth)/sign-in" className="text-center">
            <Text className="text-lg text-gray-600">
              Already have an account?{" "}
              <Text className="text-blue-600 font-semibold">Log In</Text>
            </Text>
          </Link>
        </View>
      
        {/* verification model*/}

      </View>
    </ScrollView>
  );
}
