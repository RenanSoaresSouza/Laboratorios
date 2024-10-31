import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-[#423f3e] w-screen h-fit flex flex-row justify-start">
      <View className="w-[50vw] h-full flex flex-col gap-2 m-0  justify-center items-start ">
        <View className="flex-1 w-full bg-[#8f6be5] flex"></View>
        <View className="flex-1 w-full bg-[#38b6ff]"></View>
        <View className="bg-[#5271ff] mb-2 flex-[2] w-full"></View>
      </View>
      <View className=" bg-[#423f3e] w-1/2 h-full gap-2 m-0  flex flex-col justify-end items-start">
        <View className="bg-[#93c7ff] flex-1 w-[46vw]"></View>
        <View className="bg-[#38b6ff] flex-[2] w-[46vw] flex justify-center items-center">
          <View className=" w-fit -rotate-90 text-center">
            <Text className=" h-11 text-5xl tracking-[10px] w-full  font-extrabold">
              FLEXBOX
            </Text>
          </View>
        </View>
        <View className="flex-1 w-[46vw] bg-[#612cc5] mb-2 "></View>
      </View>
    </View>
  );
}
