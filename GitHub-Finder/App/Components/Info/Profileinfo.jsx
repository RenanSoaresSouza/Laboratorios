import { Text, View, TextInput, Pressable } from "react-native";
import { SvgUri } from "react-native-svg";
import BoxInfo from "./BoxInfo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FaceId from "./ReactNative-Svg/FaceId";
import { useEffect, useState } from "react";

export default function ProfileInfo({ data }) {
  const [info, setInfo] = useState({
    orgs: "",
    repo: "",
    subs:"",
  });

  async function fectApi() {
    console.log(data.repo_url);
    const repos = await fetch(data.repos_url, {
      headers: {
        Authorization: "Bearer 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",
      },
    });
    const subs = await fetch(data.subscriptions_url, {
      headers: {
        Authorization: "Bearer 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",
      },
    });

    const orgs = await fetch(data.organizations_url,{
      headers: {
        Authorization: "Bearer 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",
      },
    })
    setInfo({
        orgs: await orgs.json(),
        repo: await repos.json(),
        subs: await subs.json(),
      }
    )
    console.log(info.subs)
  }

  useEffect(() => {
    if (data.repos_url) {
      fectApi();
    }
  }, [data]);

  return (
    <View className="w-10/12 flex flex-[2.3]">
      <View className="bg-white h-80 rounded-2xl border flex flex-col justify-center border-[#f1f1f1]">
        <BoxInfo title="Bio" description={data.bio ?? `Não possui Bio`}>
          <Ionicons name="person-outline" size={24} color="black" />
        </BoxInfo>
        <BoxInfo
          title="Orgs"
          description={"Organizações do usuário"}
        >
          <Ionicons name="headset-outline" size={24} color="black" />
        </BoxInfo>
        <BoxInfo
          title="Repositórios"
          description={
            info.repo?.length == 0 ? (
              "este usuário não possui Repositórios"
            ) : (
              <View className="flex flex-col h-fit">
                {info.repo?.map((item, index) => (
                  <Text key={index}>{item.name}</Text>
                  
                ))}
              </View>
            )
          }
        >
          <MaterialCommunityIcons
            name="file-document-outline"
            size={24}
            color="black"
          />
        </BoxInfo>
        <BoxInfo title="Seguidores" description={
            info.subs?.length == 0
              ? "este usuário não possui Seguidores"
              : <View className="flex flex-col">
              {info.subs.map((item, index) => (
                <Text key={index}>{item.name}</Text>
              ))}
            </View>
          }>
          <FaceId />
        </BoxInfo>
      </View>
    </View>
  );
}
