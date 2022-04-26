import { Row, Col, Card, Avatar, Typography } from 'antd';
import styles from './index.less';
import Button from '../button';

const { Link } = Typography;

export default function ActionBox({
  title,
  subtitle,
  description,
  buttonText,
  buttonType,
}) {
  return (
    <Card className={styles.chatbox}>
      <Title level={3} className={styles.title}>
        {title}
      </Title>

      <p className={styles.subtitle}>
        with{' '}
        <Link href="https://test.com" target="_blank">
          {subtitle}
        </Link>
      </p>

      <p>{description}</p>

      <Row justify="space-between" align="bottom">
        <Col xs={24} md={18}>
          <div>Chat with:</div>
          <Avatar.Group size="large">
            <Avatar src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          </Avatar.Group>
        </Col>
        <Col xs={24} md={6} style={{ marginTop: '1rem' }}>
          <Button block={true} size="large" type={buttonType}>
            {buttonText}
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
