import { View } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileInfo from "./Components/Info/Profileinfo";
import Reset from "./Components/Reset";
import Profile from "./Components/Profile/Profile";

export default function App() {
  const [search, setSearch] = useState("");
  const [isvalid, setIsValid] = useState();
  const [data, setData] = useState();
  const [issearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (isvalid == true) {
      fetch(`https://api.github.com/users/${search}`, {})
        .then((result) => result.json())
        .then((resp) => {
          if (verifyInvalid(resp) == true) {
            setIsValid();
            alert("Usuário não encontrado");
          } else {
            setData(resp);
          }
        })
        .catch((err) => alert(err))
        .finally(() => console.log("concluido"));
      setIsValid();
      setIsSearch(false);
    }
  }, [isvalid]);

  function HandleSubmit() {
    if (search?.length <= 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }
  function handleReset() {
    setIsValid();
    setData();
    setSearch("");
    setIsSearch(false);
  }

  function verifyInvalid(resp) {
    if (resp?.status == 404) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View className="flex h-screen w-screen flex-col items-center bg-[#f7f8fc]">
      <Profile
        issearch={issearch}
        setIsSearch={setIsSearch}
        data={data}
        isdata={data !== undefined}
        onChange={setSearch}
        onSubmit={HandleSubmit}
        valid={isvalid}
        isvalid={isvalid}
      />
      {data && <ProfileInfo data={data} />}
      {data && <Reset onClick={handleReset} />}
    </View>
  );
}
