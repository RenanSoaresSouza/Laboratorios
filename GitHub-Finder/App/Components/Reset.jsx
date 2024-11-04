import { Text, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Reset({ onClick }) {
  return (
    <View className="flex w-screen flex-[0.7] items-center justify-end rounded-tl-[40px] rounded-tr-[40px] border border-[#f1f1f1] bg-white">
      <Pressable
        onPress={onClick}
        className="m-4 flex h-3/5 w-10/12 flex-row items-center justify-center rounded-[20px] border border-black"
      >
        <MaterialIcons name="logout" size={20} color="black" />
        <Text className="m-2 h-fit text-xl">Resetar</Text>
      </Pressable>
    </View>
  );
}
