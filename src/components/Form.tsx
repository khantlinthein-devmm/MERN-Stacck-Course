import CardBox from "./Card";
import { FormEvent, ChangeEvent, useState } from "react";

interface UserInfo {
  name: string;
  live: string;
  email: string;
}

interface FormProps {
  getUserInfo: (user: UserInfo) => void;
}

export default function Form({ getUserInfo }: FormProps) {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    ) {
      setErrorMessage("All fields are required");
      return;
    }
    setErrorMessage("");

    const userInfo = {
      name,
      live,
      email,
    };

    getUserInfo(userInfo);
    setName("");
    setLive("");
    setEmail("");
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLive = (event: ChangeEvent<HTMLInputElement>) => {
    setLive(event.target.value);
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <section>
      <CardBox>
        <form onSubmit={addUser}>
          <div className="form-div">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleName} />
          </div>
          <div className="form-div">
            <label htmlFor="live">Live</label>
            <input type="text" id="live" value={live} onChange={handleLive} />
          </div>
          <div className="form-div">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <button className="btn" type="submit">
            Add User
          </button>

          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </CardBox>
    </section>
  );
}
