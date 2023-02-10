import { useSelector } from "react-redux";

export default function PasswordsList() {
  const passwords = useSelector((state) => state.passwords.value);
  console.log(passwords);

  return (
    <ul>
      {passwords.map((password, i) => (
        <li key={`${i}-item`} className="password-item">
          {password.password}
        </li>
      ))}
    </ul>
  );
}
