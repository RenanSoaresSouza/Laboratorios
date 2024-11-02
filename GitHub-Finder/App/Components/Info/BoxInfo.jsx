import { Text, View, TextInput, Pressable, ScrollView } from "react-native";

export default function BoxInfo({ children, title, description }) {
  return (
    <View className="flex-1 overflow-auto flex items-center flex-row border-b-[#f1f1f1] border border-t-0 border-r-0 border-l-0">
      <View className="border border-[#f1f1f1] rounded-lg p-2 ml-5">
        {children}
      </View>
      <View className="ml-3 h-full text-[#0b0b0b] flex flex-col justify-center flex-1">
        <Text className="font-bold text-lg">{title}</Text>
        <ScrollView>
          <Text className="text-sm text-[#b6b6b6] w-[95%] h-fit flex flex-col">
            {description}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
