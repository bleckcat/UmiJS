import "antd/dist/antd.css";
import ChatBox from "../components/chatBox";
import ActionBox from "../components/actionBox";
import { DefaultAvatars, MyAvatar, MyLove } from "../Utils/Avatars";

export default function IndexPage() {
  return (
    <ChatBox>
      <ActionBox
        title="Lorem Ipsum is simply dummy text"
        subtitle="Test"
        description="Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book."
        buttonText="Chat Now"
        buttonType="primary"
        avatarArray={DefaultAvatars}
      />
      <ActionBox
        title="Works pretty well"
        subtitle="Juan Vitor"
        description="First time using Umi and Ant but it's pretty simple to use, almost like React."
        buttonText="Hire Me"
        buttonType="ghost"
        avatarArray={MyAvatar}
      />
    </ChatBox>
  );
}
