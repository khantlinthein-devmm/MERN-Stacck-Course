import CardBox from "./Card";
import { FormEvent, useRef, useState } from "react";

interface UserInfo {
  name: string;
  live: string;
  email: string;
}

interface FormProps {
  getUserInfo: (user: UserInfo) => void;
}

export default function Form({ getUserInfo }: FormProps) {
  const [errorMessage, setErrorMessage] = useState("");
  // Initialize refs with null safely
  const nameInputRef = useRef<HTMLInputElement>(null);
  const liveInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const addUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check for empty inputs using refs
    if (
      !nameInputRef.current?.value.trim() ||
      !liveInputRef.current?.value.trim() ||
      !emailInputRef.current?.value.trim()
    ) {
      setErrorMessage("All fields are required");
      return;
    }
    setErrorMessage("");

    // Collect user info from refs
    const userInfo: UserInfo = {
      name: nameInputRef.current.value,
      live: liveInputRef.current.value,
      email: emailInputRef.current.value,
    };

    getUserInfo(userInfo);

    // Clear input fields after submission
    nameInputRef.current.value = ""; 
    liveInputRef.current.value = ""; 
    emailInputRef.current.value = ""; 

    console.log(userInfo); // Optional: For debugging
  }; // add User Function

  return (
    <section>
      <CardBox>
        <form onSubmit={addUser}>
          <div className="form-div">
            <label htmlFor="name">Name</label>
            <input type="text" ref={nameInputRef} />
          </div>
          <div className="form-div">
            <label htmlFor="live">Live</label>
            <input type="text" ref={liveInputRef} />
          </div>
          <div className="form-div">
            <label htmlFor="email">Email</label>
            <input type="email" ref={emailInputRef} />
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
