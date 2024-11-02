import { useEffect, useState } from "react";
import { Modal, Text, View, Pressable, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";
export default function Modalup({
  title,
  showmodal,
  setShowModal,
  dataurl,
  isfetch,
}) {
  const [data, setData] = useState();

  async function fetchApi() {
    const data = await fetch(dataurl, {
      headers: {
        Authorization: "Bearer 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",
      },
    })
      .then((resp) => resp.json())
      .finally(() => console.log(`${title} Concluida`));

    setData(await data);
  }

  useEffect(() => {
    if (isfetch == true) {
      fetchApi();
    }
  }, [dataurl]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={showmodal}
      className="h-fit w-fit flex justify-center items-center"
    >
      <View className="h-full w-screen flex flex-col bg-[#0000006e] justify-center items-center">
        <Animated.View
          entering={BounceIn.delay(100).duration(400)}
          className="bg-white h-1/2 w-11/12 rounded-xl flex items-center"
        >
          <View className="h-full w-full flex flex-col justify-between items-center">
            <View className="flex-[0.3] h-fit ">
              <Text className="font-bold text-4xl mt-4">{title}</Text>
            </View>
            <View className="flex-1 h-fit p-4 w-full">
              <ScrollView>
                {dataurl && isfetch == false ? (
                  <Text>{dataurl}</Text>
                ) : data?.length == 0 || data == null ? (
                  <Text className="text-[#747474]">
                    Este Usuário Não Possui {title}
                  </Text>
                ) : isfetch == true ? (
                  title == "Repositórios" ? (
                    data?.map((items, index) => (
                      <Text className="text-[#747474]" key={index}>
                        <MaterialCommunityIcons
                          name="file-document-outline"
                          size={15}
                          color="gray"
                        />
                        {items.full_name}
                      </Text>
                    ))
                  ) : title == "Orgs" ? (
                    data?.map((items, index) => (
                      <Text className="text-[#747474]" key={index}>
                        <Ionicons
                          name="headset-outline"
                          size={15}
                          color="gray"
                        />{" "}
                        {items.login}
                      </Text>
                    ))
                  ) : (
                    data?.map((items, index) => (
                      <Text className="text-[#747474]" key={index}>
                        @{items.login}
                      </Text>
                    ))
                  )
                ) : (
                  dataurl
                )}
              </ScrollView>
            </View>
            <Pressable
              onPress={setShowModal}
              className="flex-[0.1] mb-8 h-fit justify-center  flex-row bg-red-500 py-2 rounded-full w-[90%]"
            >
              <Text className="text-white font-bold text-">CLOSE</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
