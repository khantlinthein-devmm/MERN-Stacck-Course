import { useState } from "react";
import FormBox from "./Form";
import List from "./List";

interface UserInfo {
  name : string,
  live : string,
  email : string,
}

export default function Main() {
  const [userInfos, setUserInfos] = useState<UserInfo[]>([]);

  const getUserInfo = (userInfoObj : UserInfo)  => {
    
    setUserInfos([...userInfos, userInfoObj]);
  }
  return (
    <section className="main">
      <FormBox getUserInfo={getUserInfo} />
      <List userInfos={userInfos} />
    </section>
  );
}
