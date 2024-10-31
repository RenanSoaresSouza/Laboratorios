import { Text, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Reset() {
  return (
    <View className="border border-[#f1f1f1] bg-white w-screen flex-[0.7] rounded-tl-[40px] rounded-tr-[40px] flex justify-end items-center">
      <Pressable className="flex flex-row justify-center items-center w-10/12 border border-black rounded-[20px] m-4 h-3/5">
        <MaterialIcons name="logout" size={20} color="black" />
        <Text className="text-xl h-fit m-2">Resetar</Text>
      </Pressable>
    </View>
  );
}
