import ChatBox from '../components/chatBox';
import ActionBox from '../components/actionBox';
import 'antd/dist/antd.css';

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
      />
    </ChatBox>
  );
}
