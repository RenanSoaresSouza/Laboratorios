import { Text, View, TextInput, Pressable } from "react-native";
import { SvgUri } from "react-native-svg";
import BoxInfo from "./BoxInfo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FaceId from "./ReactNative-Svg/FaceId";

export default function ProfileInfo() {
  return (
    <View className="w-10/12 flex flex-[2.3]">
      <View className="bg-white h-80 rounded-2xl border flex flex-col justify-center border-[#f1f1f1]">
        <BoxInfo title="Bio" description={"Bio do Usuário"}>
          <Ionicons name="person-outline" size={24} color="black" />
        </BoxInfo>
        <BoxInfo title="Orgs" description={"Organizações"}>
          <Ionicons name="headset-outline" size={24} color="black" />
        </BoxInfo>
        <BoxInfo title="Repositórios" description={"Sem Repositórios"}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={24}
            color="black"
          />
        </BoxInfo>
        <BoxInfo title="Seguidores" description={"Sem Seguidores"}>
          <FaceId />
        </BoxInfo>
      </View>
    </View>
  );
}
