import Card from "./Card";

interface UserInfo {
  name: string;
  live: string;
  email: string;
}

interface ListProps {
  userInfos: UserInfo[];
}

export default function List({ userInfos }: ListProps) {
  return (
    <>
      {userInfos.length > 0 ? (
        <>
          {userInfos.map((info, index) => {
            return (
              <Card key={index} css={"card-mt"}>
                <ul className="list">
                  <li>Name : {info.name}</li>
                  <li>From : {info.live}</li>
                  <li>Email : {info.email}</li>
                </ul>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <Card css={"card-mt"}>
            <p>Add a new user right now!</p>
          </Card>
        </>
      )}
    </>
  );
}
