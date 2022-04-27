import { Button } from "antd";

export default function DefaultButton({
  type = "primary",
  text,
  size = "large",
}) {
  const hireMe = () => {
    window.open("https://www.linkedin.com/in/juan-vitor-781057167/");
  };
  return (
    <Button block={true} size={size} type={type} onClick={hireMe}>
      {text}
    </Button>
  );
}
