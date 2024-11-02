import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileInfo from "./Components/Info/Profileinfo";
import Reset from "./Components/Reset";
import Profile from "./Components/Profile/Profile";

export default function App() {
  const [search, setSearch] = useState("");
  const [isvalid, setIsValid] = useState();
  const [data,setData] = useState();

  useEffect(()=>{
    console.log(search)
    if (isvalid == true){
      fetch(`https://api.github.com/users/${search}`,{headers:{"Authorization": "Bearer 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"}})
      .then((result) => result.json())
      .then((resp) => setData(resp))
      .catch((err) => alert(err))
      .finally(()=> console.log("concluido"))
      
    }
    
  },[isvalid])
  
  function HandleSubmit() {
    if (search?.length <= 0) {
      setIsValid(false);
    } else {
      setIsValid(true);

    }
  }
  function handleReset(){
    setIsValid()
    setData();
    setSearch("")
  }

  return (
    <View className="bg-[#f7f8fc] w-screen h-screen flex flex-col items-center">
      <Profile data={data}  isdata={data !== undefined } onChange={setSearch} onSubmit={HandleSubmit} valid={isvalid} isvalid={isvalid} />
      {data && <ProfileInfo data={data} />}
      {data && <Reset onClick={handleReset} />}
    </View>
  );
}
