import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

interface InputFieldProps {
  label?: string;
  labelStyle?: string;
  icon?: any;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
}

const InputField = ({
  label,
  labelStyle,
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  keyboardType = "default",
  autoCapitalize = "none",
  autoCorrect = false,
  ...props
}: InputFieldProps) => {
  return (
    <View className={`my-2 w-full ${className}`}>
      {label && (
        <Text className={`text-lg font-semibold mb-3 text-black ${labelStyle}`}>
          {label}
        </Text>
      )}
      <View
        className={`flex flex-row justify-start items-center relative
           bg-gray-100 rounded-full border border-gray-200 px-4 py-3 ${containerStyle}`}
      >
        {icon && (
          <Image 
            source={icon} 
            className={`w-6 h-6 mr-3 ${iconStyle}`}
            resizeMode="contain"
          />
        )}
        <TextInput
          className={`flex-1 text-black text-base ${inputStyle}`}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          {...props}
        />
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({});
