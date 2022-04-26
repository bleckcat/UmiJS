import { Row, Col } from 'antd';
import styles from './index.less';

export default function ChatBox({ children }) {
  return (
    <Row justify="center" align="middle" className={styles.main}>
      <Col>{children}</Col>
    </Row>
  );
}
