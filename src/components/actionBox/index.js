import { Row, Col, Card, Avatar, Typography } from "antd";
import styles from "./index.less";
import DefaultButton from "../button";

export default function ActionBox({
  title,
  subtitle,
  description,
  buttonText,
  buttonType,
  avatarArray = [],
}) {
  return (
    <Card className={styles.chatbox}>
      <Typography.Title level={3} className={styles.title}>
        {title}
      </Typography.Title>

      <p className={styles.subtitle}>
        with{" "}
        <Typography.Link href="https://test.com" target="_blank">
          {subtitle}
        </Typography.Link>
      </p>

      <p>{description}</p>

      <Row justify="space-between" align="bottom">
        <Col xs={24} md={18}>
          <div>Chat with:</div>
          <Avatar.Group size="large">
            {avatarArray.map((avatar) => (
              <Avatar src={avatar} />
            ))}
          </Avatar.Group>
        </Col>
        <Col xs={24} md={6} style={{ marginTop: "1rem" }}>
          <DefaultButton size="large" text={buttonText} type={buttonType} />
        </Col>
      </Row>
    </Card>
  );
}
