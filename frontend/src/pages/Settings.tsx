import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container className="py-5">
      <h2>設定ページ</h2>
      <Form>
        <Form.Check
          type="switch"
          id="theme-switch"
          label={`テーマ：${theme === 'dark' ? 'ダーク' : 'ライト'}`}
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
      </Form>
    </Container>
  );
};

export default Settings;