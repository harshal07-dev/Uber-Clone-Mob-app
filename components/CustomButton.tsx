import { Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps {
  onPress?: () => void;
  title: string;
  bgVarient?: "primary" | "secondary" | "outline";
  textVarient?: "default" | "light" | "dark";
  IconLeft?: React.ComponentType;
  IconRight?: React.ComponentType;
  className?: string;
  disabled?: boolean;
}

const CustomButton = ({
  onPress,
  title,
  bgVarient = "primary",
  textVarient = "default",
  IconLeft,
  IconRight,
  className = "",
  disabled = false,
}: CustomButtonProps) => {
  const getBackgroundColor = () => {
    switch (bgVarient) {
      case "primary":
        return "bg-[#0286FF]";
      case "secondary":
        return "bg-gray-500";
      case "outline":
        return "bg-transparent border-2 border-[#0286FF]";
      default:
        return "bg-[#0286FF]";
    }
  };

  const getTextColor = () => {
    switch (textVarient) {
      case "default":
        return bgVarient === "outline" ? "text-[#0286FF]" : "text-white";
      case "light":
        return "text-gray-300";
      case "dark":
        return "text-black";
      default:
        return bgVarient === "outline" ? "text-[#0286FF]" : "text-white";
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`${getBackgroundColor()} py-4 px-8 rounded-full ${disabled ? "opacity-50" : ""} ${className}`}
    >
      <View className="flex-row items-center justify-center">
        {IconLeft && (
          <View className="mr-2">
            <IconLeft />
          </View>
        )}
        <Text className={`${getTextColor()} text-lg font-semibold text-center`}>
          {title}
        </Text>
        {IconRight && (
          <View className="ml-2">
            <IconRight />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;