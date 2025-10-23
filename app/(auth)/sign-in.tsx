import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";

export default function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const onSignInPress = () => {
    // router.replace("/(auth)/sign-in")
  }
  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        </View>
        <Text className="text-3xl text-black font-semibold absolute bottom-5 left-5">
          Welcome 👋
        </Text>
      </View>
      <View className="p-5">
        
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
        <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6 bg-primary-600"/>
        <OAuth/>
        {/* OAuth */}
        <Link href="/sign-up" className="text-lg text-center mt-10">
        <Text>Don't have an account?
        </Text>
        <Text className="text-blue-500 font-semibold"> Sign Up</Text>  
        </Link>
      
        {/* verification model*/}

      </View>
    </ScrollView>
  );
}
// import { useSignIn } from '@clerk/clerk-expo'
// import { Link, useRouter } from 'expo-router'
// import React from 'react'
// import { Text, TextInput, TouchableOpacity, View } from 'react-native'

// export default function Page() {
//   const { signIn, setActive, isLoaded } = useSignIn()
//   const router = useRouter()

//   const [emailAddress, setEmailAddress] = React.useState('')
//   const [password, setPassword] = React.useState('')

//   // Handle the submission of the sign-in form
//   const onSignInPress = async () => {
//     if (!isLoaded) return

//     // Start the sign-in process using the email and password provided
//     try {
//       const signInAttempt = await signIn.create({
//         identifier: emailAddress,
//         password,
//       })

//       // If sign-in process is complete, set the created session as active
//       // and redirect the user
//       if (signInAttempt.status === 'complete') {
//         await setActive({ session: signInAttempt.createdSessionId })
//         router.replace('/')
//       } else {
//         // If the status isn't complete, check why. User might need to
//         // complete further steps.
//         console.error(JSON.stringify(signInAttempt, null, 2))
//       }
//     } catch (err) {
//       // See https://clerk.com/docs/custom-flows/error-handling
//       // for more info on error handling
//       console.error(JSON.stringify(err, null, 2))
//     }
//   }

//   return (
//     <View>
//       <Text>Sign in</Text>
//       <TextInput
//         autoCapitalize="none"
//         value={emailAddress}
//         placeholder="Enter email"
//         onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
//       />
//       <TextInput
//         value={password}
//         placeholder="Enter password"
//         secureTextEntry={true}
//         onChangeText={(password) => setPassword(password)}
//       />
//       <TouchableOpacity onPress={onSignInPress}>
//         <Text>Continue</Text>
//       </TouchableOpacity>
//       <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
//         <Link href="/sign-up">
//           <Text>Sign up</Text>
//         </Link>
//       </View>
//     </View>
//   )
// }