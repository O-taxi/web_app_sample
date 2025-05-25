import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container className="py-5">
      <h2 className="mb-4 fs-3">設定</h2>
      <Form>
        <Form.Check
          type="switch"
          id="theme-switch"
          label={`テーマ：${theme === 'dark' ? 'ダーク' : 'ライト'}`}
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="fs-4"
        />
      </Form>
    </Container>
  );
};

export default Settings;