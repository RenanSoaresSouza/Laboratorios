import { useEffect, useState } from "react";
import { Modal, Text, View, Pressable, ScrollView, Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, { BounceIn } from "react-native-reanimated";

export default function Modalup({
  title,
  showmodal,
  setShowModal,
  dataurl,
  isfetch,
}) {
  const [data, setData] = useState();
  const [user, setUser] = useState();

  async function fetchApi() {
    const data = await fetch(dataurl)
      .then((resp) => resp.json())
      .finally(() => console.log(`${title} Concluida`));

    setData({ data: await data });
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
      className="flex h-fit w-fit items-center justify-center"
    >
      <View className="flex h-full w-screen flex-col items-center justify-center bg-[#0000006e]">
        <Animated.View
          entering={BounceIn.delay(100).duration(400)}
          className="flex h-1/2 w-11/12 items-center rounded-xl bg-white"
        >
          <View className="flex h-full w-full flex-col items-center justify-between">
            <View className="h-fit flex-[0.3]">
              <Text className="mt-4 text-4xl font-bold">{title}</Text>
            </View>
            <View className="h-fit w-full flex-1 p-4">
              <ScrollView>
                {dataurl && isfetch == false ? (
                  <Text>{dataurl}</Text>
                ) : data?.data?.length == 0 || data == null ? (
                  <Text className="text-[#747474]">
                    Este Usuário Não Possui {title}
                  </Text>
                ) : isfetch == true ? (
                  title == "Repositórios" ? (
                    data?.data?.map((items, index) => (
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
                    data?.data?.map((items, index) => (
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
                    data?.data.map((items, index) => (
                      <View
                        key={index}
                        className="flex flex-row items-center my-1"
                      >
                        <View className="h-fit w-fit items-center justify-center bg-black rounded-full">
                          <Image
                            className="rounded-full h-10 w-10"
                            source={{ uri: items.avatar_url }}
                          />
                        </View>
                        <Text className="text-[#747474] ml-1">
                          @{items.login}
                        </Text>
                      </View>
                    ))
                  )
                ) : (
                  dataurl
                )}
              </ScrollView>
            </View>
            <Pressable
              onPress={setShowModal}
              className="mb-8 h-fit w-[90%] flex-[0.1] flex-row justify-center rounded-full bg-red-500 py-2"
            >
              <Text className="font-bold text-white">CLOSE</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
