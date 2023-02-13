export default function PasswordStrength(props) {
  // console.log(props.score);
  let barStyle = "";
  switch (props.score) {
    case 0:
      barStyle = "terrible";
      break;

    case 1:
      barStyle = "weak";
      break;

    case 2:
      barStyle = "okay";
      break;

    case 3:
      barStyle = "safe";
      break;

    case 4:
      barStyle = "secure";
      break;
    default:
    // console.log("no score yet");
  }

  return <div className={barStyle}>{barStyle}</div>;
}
