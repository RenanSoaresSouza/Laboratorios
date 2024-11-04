import { Text, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Modalup from "../Modal";
import { useState } from "react";

export default function BoxInfo({ children, title, description, data, fetch }) {
  const [showmodal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal((prevmodal) => !prevmodal);
  }
  return (
    //Adicione um Pressable Aqui
    //Concertar depois a borda de baixo do VIEW (Não pode ser exibida na de seguidores)
    <View className="flex-1">
      <Pressable
        onPress={handleModal}
        className={
          "flex flex-1 flex-row items-center overflow-auto border-b-[#f1f1f1] " +
          (title == "Seguidores" ? "" : "border-b")
        }
      >
        <View className="ml-5 rounded-lg border border-[#f1f1f1] p-2">
          {children}
        </View>
        <View className="ml-3 flex h-full flex-1 flex-col justify-center text-[#0b0b0b]">
          <Text className="text-lg font-bold">{title}</Text>
          <Text className="flex h-fit w-[95%] flex-col text-sm text-[#b6b6b6]">
            {description}
          </Text>
        </View>
        <View className="mr-2">
          <MaterialIcons name="navigate-next" size={30} color="black" />
        </View>
      </Pressable>
      <Modalup
        showmodal={showmodal}
        setShowModal={handleModal}
        isfetch={fetch}
        dataurl={data}
        title={title}
      />
    </View>
  );
}
