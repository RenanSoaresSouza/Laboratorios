import { Text, View, TextInput, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function BoxInfo({ children, title, description }) {
  return (
    <View className="flex-1 flex items-center flex-row border-b-[#f1f1f1] border border-t-0 border-r-0 border-l-0">
      <View className="border border-[#f1f1f1] rounded-lg p-2 ml-5">
        {children}
      </View>
      <View className="ml-3 h-full text-[#0b0b0b] flex flex-col justify-center flex-1">
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-sm text-[#b6b6b6] w-[95%]">{description}</Text>
      </View>
    </View>
  );
}
