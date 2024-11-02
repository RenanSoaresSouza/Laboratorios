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
          "flex-1 overflow-auto flex items-center flex-row border-b-[#f1f1f1] " +
          (title == "Seguidores" ? "" : "border-b")
        }
      >
        <View className="border border-[#f1f1f1] rounded-lg p-2 ml-5">
          {children}
        </View>
        <View className="ml-3 h-full text-[#0b0b0b] flex flex-col justify-center flex-1">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-sm text-[#b6b6b6] w-[95%] h-fit flex flex-col">
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
