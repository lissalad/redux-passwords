import { useSelector } from "react-redux";

export default function PasswordsList() {
  const passwords = useSelector((state) => state.passwords.value);
  console.log(passwords);

  return (
    <ul id="password-collection">
      {passwords.map((password, i) => (
        <li key={`${i}-item`} className="password-item">
          <p>{password.name}</p>
          <p>{password.password}</p>
        </li>
      ))}
    </ul>
  );
}
