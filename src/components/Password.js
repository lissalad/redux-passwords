import { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("p@$$w0rd");
  const [passwordLabel, setPasswordLabel] = useState("My Password");
  const [passwordLength, setPasswordLength] = useState("My Password");

  function generatePassword() {
    // generate a password here
    console.log("generating password");
    let secret = "";
    for (let i = 0; i < passwordLength; i += 1) {
      secret += random();
    }
    setPassword(secret);
  }

  function random() {
    const charCode = Math.floor(Math.random() * 94 + 33);
    return String.fromCharCode(charCode);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setPasswordLabel(e.target.value)}
        value={passwordLabel}
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="range"
        min="1"
        max="128"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
        id="myRange"
      />

      <div>
        <button
          onClick={(e) => {
            generatePassword();
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
