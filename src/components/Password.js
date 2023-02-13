import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPassword } from "../features/passwords/passwordsSlice";
import zxcvbn from "zxcvbn";
import PasswordStrength from "./PasswordStrength";

export default function Password() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [passwordLabel, setPasswordLabel] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [passwordStrengthScore, setPasswordStrengthScore] = useState();

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

  function evaluateStrength() {
    // console.log(zxcvbn(password).score);
    setPasswordStrengthScore(zxcvbn(password).score);
  }

  return (
    <div id="password-form">
      <label>
        Name:
        <input
          type="text"
          onChange={(e) => setPasswordLabel(e.target.value)}
          value={passwordLabel}
        />
      </label>

      <div className="password-field">
        <label>
          Password:
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
              evaluateStrength();
            }}
            value={password}
          />
        </label>
        <button
          onClick={(e) => {
            generatePassword();
            evaluateStrength();
          }}
        >
          Generate
        </button>
        <div>
          <p>Length: {passwordLength}</p>
          <input
            type="range"
            min="1"
            max="128"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            id="myRange"
          />
        </div>
        {/* <button onClick={() => evaluateStrength()}>Evaluate Strength</button> */}
      </div>
      <PasswordStrength score={passwordStrengthScore} />
      <div>
        <button
          onClick={() =>
            dispatch(addPassword({ password, name: passwordLabel }))
          }
        >
          Save
        </button>
      </div>
    </div>
  );
}
