import React from 'react';
import { Container } from 'react-bootstrap';

const Settings: React.FC = () => {
  return (
    <Container className="py-5">
      <h2>設定ページ</h2>
      <p>ここでユーザー設定を変更できます。</p>
    </Container>
  );
};

export default Settings;