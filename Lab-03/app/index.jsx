import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-[#423f3e] w-screen h-fit flex flex-row justify-start">
      <View className="w-fit  h-full flex flex-col gap-2 m-0  justify-start items-center ">
        <View className="flex-1 w-[95%] bg-[#8f6be5] flex"></View>
        <View className="flex-1 w-[95%] bg-[#38b6ff] "></View>
        <View className="bg-[#5271ff] mb-2 flex-[2] w-[180px]"></View>
      </View>
      <View className="w-fit h-full  gap-2 m-0  flex flex-col justify-end items-start">
        <View className="bg-[#93c7ff] flex-1 w-[64%]"></View>
        <View className="bg-[#38b6ff] flex-[2] w-[64%] flex justify-center items-center">
          <View className=" w-fit -rotate-90 text-center">
            <Text className=" h-11 text-5xl tracking-[10px] w-full  font-extrabold">
              FLEXBOX
            </Text>
          </View>
        </View>
        <View className="flex-1 w-[64%] bg-[#612cc5] mb-2 "></View>
      </View>
    </View>
  );
}
