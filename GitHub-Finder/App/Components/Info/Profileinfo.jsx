import { View } from "react-native";
import BoxInfo from "./BoxInfo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FaceId from "./ReactNative-Svg/FaceId";
import Animated, { SlideInLeft } from "react-native-reanimated";

export default function ProfileInfo({ data }) {
  return (
    <Animated.View entering={SlideInLeft} className="flex w-10/12 flex-[2.3]">
      <View className="flex h-80 flex-col justify-center rounded-2xl border border-[#f1f1f1] bg-white">
        <BoxInfo
          data={data.bio}
          fetch={false}
          title="Bio"
          description="Bio do Usuário"
        >
          <Ionicons name="person-outline" size={24} color="black" />
        </BoxInfo>
        <BoxInfo
          fetch={true}
          data={data.organizations_url}
          title="Orgs"
          description="Organizações do usuário"
        >
          <Ionicons name="headset-outline" size={24} color="black" />
        </BoxInfo>
        <BoxInfo
          fetch={true}
          data={data.repos_url}
          title="Repositórios"
          description="Repositórios do Usuário"
        >
          <MaterialCommunityIcons
            name="file-document-outline"
            size={24}
            color="black"
          />
        </BoxInfo>
        <BoxInfo
          fetch={true}
          data={data.followers_url}
          title="Seguidores"
          description="Seguidores o Usuário"
        >
          <FaceId />
        </BoxInfo>
      </View>
    </Animated.View>
  );
}
